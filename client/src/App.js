import React, { useState } from 'react'
import io from 'socket.io-client'

import { useSelector, useDispatch } from 'react-redux'
import chatSlice, {
  selectChat,
  changeCurrentUsername,
  changeCurrentRoom,
  defineSocket,
} from './features/chat/chatSlice'

import './App.css'
import Chat from './Chat'
const socket = io.connect('http://localhost:3001')

function App() {
  const dispatch = useDispatch()
  const chatState = useSelector(selectChat)

  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room)
      dispatch(changeCurrentRoom(room))
      dispatch(changeCurrentUsername(username))
      dispatch(defineSocket(socket))
    }
  }

  return (
    <div className="App">
      <h3>Join Chat</h3>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="john..."
      />
      <input onChange={(e) => setRoom(e.target.value)} placeholder="room id" />
      <button onClick={joinRoom}>Join a room</button>

      <Chat socket={socket} username={username} room={room} />
    </div>
  )
}

export default App