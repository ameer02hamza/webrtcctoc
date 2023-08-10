import { io } from 'socket.io-client';

export let localMediaStream: MediaStream;
export let remoteMediaStream: MediaStream;
let isAudioEnabled: boolean = true;
let isVideoEnabled: boolean = true;
let peerConnection = null;
let socket = io(process.env.SOCKET_URI!, { transports: ['websocket'] });
let userAgent: string;
let peerConnections: any = {};
let allPeers: any;
let needToCreateOffer:boolean = false;
let backupIceServers = [
    { "urls": "stun:stun.l.google.com:19302" },
    {
        "urls": 'turn:openrelay.metered.ca:443',
        "username": 'openrelayproject',
        "credential": 'openrelayproject',
    },
    {
        "urls": "turn:relay.metered.ca:80",
        "username": "e6eaeb050a456e1d11d10f16",
        "credential": "zIQIkzuBONnk5TBs",
    },
    {
        "urls": "turn:relay.metered.ca:443",
        "username": "e6eaeb050a456e1d11d10f16",
        "credential": "zIQIkzuBONnk5TBs",
    },
    {
        "urls": "turn:relay.metered.ca:443?transport=tcp",
        "username": "e6eaeb050a456e1d11d10f16",
        "credential": "zIQIkzuBONnk5TBs",
    },
];
/**
 * request to connect the socket to signalling server
 */
export const connectToServer = () => {
    console.log(`%c connectToServer`, 'background: #008000; color: #fff');


    socket.connect()
    socket.on('connect', onConnect);
    socket.on('serverInfo', handleServerInfo);
    socket.on('addPeer', handleAddPeer);
    socket.on('sessionDescription', handleSessionDescription);
    socket.on('iceCandidate', handleIceCandidate);
    socket.on('disconnect', handleDisconnect);
}

/**
 * function calls when the socket connects to the signalling server
 */
const onConnect = () => {
    console.log(`%c onConnect`, 'background: #008000; color: #fff');
    userAgent = navigator.userAgent.toLowerCase();
    console.log(`type of userAgent ${userAgent}`)

    if (localMediaStream != null) {
        joinToChannel();
        return
    }
    setLocalmediaStream();
}
/**
 * handle server info
 */
const handleServerInfo = (config: any) => {
    console.log('%c  handleServerInfo', 'background: #008000; color: #fff');

    let peers_count = config.peers_count;

    console.table(config);

    // Limit room to n peers
    // if (userLimitsActive && peers_count > usersCountLimit) {
    //     return roomIsBusy();
    // }

    // Let start with some basic rules
    // isPresenter = peers_count == 1 ? true : false;
    // if (isRulesActive) {
    //     handleRules(isPresenter);
    // }

    // if (notify && peers_count == 1) {
    //     // shareRoomMeetingURL(true);
    // } else {
    //     checkShareScreen();
    // }
}
const handleAddPeer = async (config: any) => {
    console.log('%c handleAddPeer', 'background: #008000; color: #fff');
    let peer_id = config.peer_id;
    let peers = config.peers;
    let peer_name = peers[peer_id]['peer_name'];
    let peer_video = peers[peer_id]['peer_video'];
    let should_create_offer = config.should_create_offer;
    let iceServers = config.iceServers;

    // if (peer_id in peerConnections) {
    //     // This could happen if the user joins multiple channels where the other peer is also in.
    //     return console.log('Already connected to peer', peer_id);
    // }
    if (!iceServers) iceServers = backupIceServers;
    console.log('iceServers', iceServers[0]);
    peerConnection = new RTCPeerConnection({ iceServers: iceServers });
    peerConnections[peer_id] = peerConnection;
    console.log('[RTCPeerConnection] - PEER_ID', peer_id);
    console.log('[RTCPeerConnection] - PEER-CONNECTIONS', peerConnections);
    console.log('[RTCPeerConnection] - PEERS', peers);
    allPeers = peers;
    let connectedPeersName = [];
    for (let pId in peerConnections) {
        connectedPeersName.push({
            peer_name: peers[pId]['peer_name'],
        });
    }
    console.log('[RTCPeerConnection] - CONNECTED TO', JSON.stringify(connectedPeersName));
    await handlePeersConnectionStatus(peer_id);
    await handleOnIceCandidate(peer_id);
    await handleOnTrack(peer_id, peers);
    await handleAddTracks(peer_id);
    if (isVideoEnabled && !peer_video && !needToCreateOffer) {
        needToCreateOffer = true;
    }
    if (should_create_offer) {
        await handleRtcOffer(peer_id);
        console.log('[RTCPeerConnection] - SHOULD CREATE OFFER', {
            peer_id: peer_id,
            peer_name: peer_name,
        });
    }
}
/**
 * Only one side of the peer connection should create the offer, the signaling server picks one to be the offerer.
 * The other user will get a 'sessionDescription' event and will create an offer, then send back an answer 'sessionDescription' to us
 * @param {string} peer_id socket.id
 */
 const handleRtcOffer = (peer_id: string | number) => {
    console.log('%c handleRtcOffer', 'background: #2f5233; color: #fff');
    peerConnections[peer_id].onnegotiationneeded = () => {
        console.log('Creating RTC offer to ' + allPeers[peer_id]['peer_name']);
        peerConnections[peer_id]
            .createOffer()
            .then((local_description: any) => {
                console.log('Local offer description is', local_description);
                peerConnections[peer_id]
                    .setLocalDescription(local_description)
                    .then(() => {
                        sendToServer('relaySDP', {
                            peer_id: peer_id,
                            session_description: local_description,
                        });
                        console.log('Offer setLocalDescription done!');
                    })
                    .catch((err: any) => {
                        console.error('[Error] offer setLocalDescription', err);
                    });
            })
            .catch((err: any) => {
                console.error('[Error] sending offer', err);
            });
    };
}
let handleOnTrack = async (peer_id: string | number, peers: { [x: string]: { [x: string]: any; }; }) => {
    console.log('%c handleOnTrack', 'background: #2f5233; color: #fff');
    peerConnections[peer_id].ontrack = (event: { track: MediaStreamTrack; streams: any[]; }) => {
        console.log("handle on track");
        
        let peer_name = peers[peer_id]['peer_name'];
        let kind = event.track.kind;
        console.log('[ON TRACK] - info', { peer_id: peer_id, peer_name: peer_name, kind: kind, track: event.track });
        if (event.streams && event.streams[0]) {
            remoteMediaStream = event.streams[0];
            console.log("type of stream ", typeof(event.streams), "new ", typeof(event.streams[0]));
            
            console.log('[ON TRACK] - peers', peers);
        } else {
            console.log('[ON TRACK] - SCREEN SHARING', { peer_id: peer_id, peer_name: peer_name, kind: kind });
        }
    };
}
let handlePeersConnectionStatus = (peer_id: string | number) => {
    console.log('%c handlePeersConnectionStatus', 'background: #2f5233; color: #fff');
    peerConnections[peer_id].onconnectionstatechange = function (event: { currentTarget: { connectionState: any; signalingState: any; }; }) {
        const connectionStatus = event.currentTarget.connectionState;
        const signalingState = event.currentTarget.signalingState;
        const peerName = allPeers[peer_id]['peer_name'];
        console.log('[RTCPeerConnection] - CONNECTION', {
            peer_id: peer_id,
            peer_name: peerName,
            connectionStatus: connectionStatus,
            signalingState: signalingState,
        });
    };
}
let handleOnIceCandidate = (peer_id: string | number) => {
    console.log('%c handleOnIceCandidate', 'background: #2f5233; color: #fff');
    peerConnections[peer_id].onicecandidate = (event: { candidate: { sdpMLineIndex: any; candidate: any; }; }) => {
        if (!event.candidate) return;
        sendToServer('relayICE', {
            peer_id: peer_id,
            ice_candidate: {
                sdpMLineIndex: event.candidate.sdpMLineIndex,
                candidate: event.candidate.candidate,
            },
        });
    };
}

/**
 * Disconnected from Signaling Server.
 * Tear down all of our peer connections and remove all the media divs.
 * @param {object} reason of disconnection
 */
function handleDisconnect(reason: any) {
    console.log('%c handleDisconnect', 'background: #2f5233; color: #fff');
    for (let peer_id in peerConnections) {
        peerConnections[peer_id].close();
    }
    // chatDataChannels = {};
    // fileDataChannels = {};
    peerConnections = {};
    // peerMediaElements = {};
}
/**
 * Peers exchange session descriptions which contains information about their audio / video settings and that sort of stuff. First
 * the 'offerer' sends a description to the 'answerer' (with type "offer"), then the answerer sends one back (with type "answer").
 * @param {object} config data
 */
function handleSessionDescription(config: { peer_id: any; session_description: any; }) {
    console.log('%c handleSessionDescription', 'background: #2f5233; color: #fff');

    let peer_id = config.peer_id;
    let remote_description = config.session_description;

    let description = new RTCSessionDescription(remote_description);

    peerConnections[peer_id]
        .setRemoteDescription(description)
        .then(() => {
            console.log('setRemoteDescription done!');
            if (remote_description.type == 'offer') {
                console.log('Creating answer');
                peerConnections[peer_id]
                    .createAnswer()
                    .then((local_description: any) => {
                        console.log('Answer description is: ', local_description);
                        peerConnections[peer_id]
                            .setLocalDescription(local_description)
                            .then(() => {
                                sendToServer('relaySDP', {
                                    peer_id: peer_id,
                                    session_description: local_description,
                                });
                                console.log('Answer setLocalDescription done!');
                                if (needToCreateOffer) {
                                    needToCreateOffer = false;
                                    handleRtcOffer(peer_id);
                                    console.log('[RTCSessionDescription] - NEED TO CREATE OFFER', {
                                        peer_id: peer_id,
                                    });
                                }
                            })
                            .catch((err: string) => {
                                console.error('[Error] answer setLocalDescription', err);
                            });
                    })
                    .catch((err: any) => {
                        console.error('[Error] creating answer', err);
                    });
            } // end [if type offer]
        })
        .catch((err: any) => {
            console.error('[Error] setRemoteDescription', err);
        });
}

/**
 * The offerer will send a number of ICE Candidate blobs to the answerer so they
 * can begin trying to find the best path to one another on the net.
 * @param {object} config data
 */
const handleIceCandidate = (config: { peer_id: any; ice_candidate: any; }) =>{
    console.log('%c handleIceCandidate', 'background: #2f5233; color: #fff');
    let peer_id = config.peer_id;
    let ice_candidate = config.ice_candidate;
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate
    peerConnections[peer_id].addIceCandidate(new RTCIceCandidate(ice_candidate)).catch((err: any) => {
        console.error('[Error] addIceCandidate', err);
    });
}
/**
 * Add my localMediaStream Tracks to connected peer
 * https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addTrack
 * @param {string} peer_id socket.id
 */
async function handleAddTracks(peer_id: string | number) {
    console.log('%c handleAddTracks', 'background: #2f5233; color: #fff');
    let peer_name = allPeers[peer_id]['peer_name'];
    await localMediaStream.getTracks().forEach((track) => {
        console.log('[ADD TRACK] to Peer Name [' + peer_name + '] kind - ' + track.kind);
        peerConnections[peer_id].addTrack(track, localMediaStream);
    });
}
/**
 * setup the localmedia and assign the stream to the global variable  @localMediaStream
 */
const setLocalmediaStream = async () => {
    console.log(`%c setLocalmediaStream`, 'background: #008000; color: #fff');
    const audioConstraints = isAudioEnabled
    const videoConstraints = isVideoEnabled ? getVideoConstraints() : false;
    const constraints = {
        audio: audioConstraints,
        video: videoConstraints,
    };
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        localMediaStream = stream
        joinToChannel();
    }).catch(err => {
        console.error("Failed to initialize user media ", err);
    })
}
/**
 * request to join the channel and send information to server
 */
const joinToChannel = () => {
    console.log('%c joinToChannel', 'background: #008000; color: #fff');
    sendToServer('join', {
        channel: "randomroomhere",
        userAgent: userAgent,
        channel_password: "",
        peer_info: {},
        peer_geo: {},
        peer_name: "myPeerName",
        peer_video: isVideoEnabled,
        peer_audio: isAudioEnabled,
        peer_video_status: true,
        peer_audio_status: true,
        peer_screen_status: false,
        peer_hand_status: false,
        peer_rec_status: false,
        peer_privacy_status: false,
    });

}
/**
 * send the event to server
 * @param msg "server event name"
 * @param config "user information"
 */
const sendToServer = async (msg: any, config = {}) => {
    console.log('%c  sendToServer', 'background: #FFFF00; color: #006400');
    await socket.emit(msg, config);
}
const getVideoConstraints = () => {
    console.log(`%c getVideoConstraints`, 'background: #008000; color: #fff');

    let videoConstraints = {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 },
    };
    return videoConstraints;
}