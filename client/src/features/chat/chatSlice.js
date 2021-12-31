import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputMessage: '',
  currentRoom: '',
  currentUsername: '',
  chatLog: [],
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeMessageInput: (state, action) => {
      state.inputMessage = action.payload
    },
    changeCurrentRoom: (state, action) => {
      state.currentRoom = action.payload
    },
    changeCurrentUsername: (state, action) => {
      state.currentUsername = action.payload
    },
    addMessageToChatLog: (state, action) => {
      state.chatLog.push(action.payload)
    },
  },
})

export const {
  changeCurrentUsername,
  addMessageToChatLog,
  changeCurrentRoom,
  changeMessageInput,
} = chatSlice.actions

export const selectChat = (state) => state.chat

export default chatSlice.reducer
