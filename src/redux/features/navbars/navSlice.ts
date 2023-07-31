import { createSlice } from '@reduxjs/toolkit'

export interface NavActionsState {
  chatBox: boolean
}

const initialState: NavActionsState = {
    chatBox: true,
}

export const navActionSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {
    showInbox: (state) => {
      state.chatBox = !state.chatBox 
    },
  },
})

// Action creators are generated for each case reducer function
export const { showInbox } = navActionSlice.actions

export default navActionSlice.reducer