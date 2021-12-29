import React, { useState } from 'react'
import io from 'socket.io-client'

import './App.css'
const socket = io.connect('http://localhost:3001')

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room)
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
    </div>
  )
}

export default App
