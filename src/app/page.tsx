import Image from 'next/image'
import MainBody from './compnents/mainbody'
import Header from './compnents/header'
import SideBar from './compnents/sidebar'

export default function Home() {
  return (
    <>
    <Header />
    <SideBar />
     <MainBody />
    </>

  )
}
