import React, { useEffect, useState } from 'react'
import Header from './Header'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'
import { useDispatch, useSelector } from 'react-redux'
import { addMessageToChatLog, selectChat } from './features/chat/chatSlice'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('')
  const chatState = useSelector(selectChat)
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on('recieve_message', (data) => {
      console.log(data)
      dispatch(addMessageToChatLog(data))
    })
  }, [socket])

  const chatBodyStyling = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '100%',
    height: 1000,
  }

  return (
    <div>
      <Header />
      <ChatBody />
      <ChatFooter socket={socket} />
    </div>
  )
}

export default Chat
