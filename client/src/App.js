import React, { useState } from 'react'
import io from 'socket.io-client'
import { Grid } from '@mui/material'
import Header from './Header'
import ChatFooter from './ChatFooter'
import { GlobalStyles } from '@mui/material'

import { useDispatch } from 'react-redux'
import {
  changeCurrentUsername,
  changeCurrentRoom,
} from './features/chat/chatSlice'

import './App.css'
import Chat from './Chat'
import LoginForm from './LoginForm'

const socket = io.connect()

function App() {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room, username)
      dispatch(changeCurrentRoom(room))
      dispatch(changeCurrentUsername(username))
      console.log(socket)
      setShowChat(true)
    }
  }

  return (
    <>
      <GlobalStyles styles={{ fontSize: '62.5%' }} />
      <Header />
      <ChatFooter />
      <Grid container>
        <Grid sm={2} item></Grid>
        <Grid sm={8} item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 'auto',
              justifyContent: 'center',
            }}
            className="App"
          >
            {showChat ? (
              <Chat socket={socket} username={username} room={room} />
            ) : (
              <LoginForm
                setUsername={setUsername}
                setRoom={setRoom}
                joinRoom={joinRoom}
                room={room}
              />
            )}
          </div>
        </Grid>
        <Grid sm={2} item></Grid>
      </Grid>
    </>
  )
}

export default App
