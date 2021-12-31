import React, { useState } from 'react'
import io from 'socket.io-client'
import { Grid } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import chatSlice, {
  selectChat,
  changeCurrentUsername,
  changeCurrentRoom,
} from './features/chat/chatSlice'

import './App.css'
import Chat from './Chat'
const socket = io.connect('http://localhost:3001')

function App() {
  const dispatch = useDispatch()
  const chatState = useSelector(selectChat)

  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room)
      dispatch(changeCurrentRoom(room))
      dispatch(changeCurrentUsername(username))
      console.log(socket)
      setShowChat(true)
    }
  }

  const chatBodyStyling = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '100%',
    visualViewport: 1,
  }

  return (
    <Grid container>
      <Grid sm={2} item></Grid>

      <Grid sm={8} item>
        <div className="App">
          {showChat ? (
            <Chat socket={socket} username={username} room={room} />
          ) : (
            <>
              <h3>Join Chat</h3>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="john..."
              />
              <input
                onChange={(e) => setRoom(e.target.value)}
                placeholder="room id"
              />
              <button onClick={joinRoom}>Join a room</button>
            </>
          )}
        </div>
      </Grid>
      <Grid sm={2} item></Grid>
    </Grid>
  )
}

export default App
