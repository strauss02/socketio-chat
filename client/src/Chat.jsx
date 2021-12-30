import React, { useState } from 'react'
import Header from './Header'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('')

  return (
    <div>
      <Header />
      <ChatBody />
      <ChatFooter />
    </div>
  )
}

export default Chat
