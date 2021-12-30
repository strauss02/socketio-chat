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
  },
})

export const { changeCurrentUsername, changeCurrentRoom, changeMessageInput } =
  chatSlice.actions

export const selectChat = (state) => state.chat

export default chatSlice.reducer
