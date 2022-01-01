import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputMessage: '',
  currentRoom: '',
  currentUsername: '',
  chatLogs: {
    'The Watercooler': [],
    'The Feelings Room': [],
    'Mid-Life Crisis': [],
  },
  roomPopulation: {
    'The Watercooler': [],
    'The Feelings Room': [],
    'Mid-Life Crisis': [],
  },
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
      state.chatLogs[action.payload.room].push(action.payload)
    },
    changeRoomPopulation: (state, action) => {
      state.roomPopulation = action.payload
    },
  },
})

export const {
  changeRoomPopulation,
  changeCurrentUsername,
  addMessageToChatLog,
  changeCurrentRoom,
  changeMessageInput,
} = chatSlice.actions

export const selectChat = (state) => state.chat

export default chatSlice.reducer
