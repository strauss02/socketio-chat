import React, { useEffect, useState } from 'react'
import Header from './Header'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('')

  useEffect(() => {
    socket.on('recieve_message', (data) => {
      console.log(data)
    })
  }, [socket])

  return (
    <div>
      <Header />
      <ChatBody />
      <ChatFooter socket={socket} />
    </div>
  )
}

export default Chat
