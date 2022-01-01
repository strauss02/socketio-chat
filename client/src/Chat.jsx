import React, { useEffect, useState } from 'react'
import Header from './Header'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'
import { useDispatch, useSelector } from 'react-redux'
import {
  addMessageToChatLog,
  changeRoomPopulation,
  selectChat,
} from './features/chat/chatSlice'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('')
  const chatState = useSelector(selectChat)
  const dispatch = useDispatch()

  useEffect(() => {
    socket.on('recieve_message', (data) => {
      console.log(data)
      dispatch(addMessageToChatLog(data))
    })
    socket.on('population_changed', (data) => {
      console.log('from client', data)
      dispatch(changeRoomPopulation(data))
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
