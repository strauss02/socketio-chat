import React, { useEffect } from 'react'
import Header from './Header'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'
import { useDispatch } from 'react-redux'
import {
  addMessageToChatLog,
  changeRoomPopulation,
} from './features/chat/chatSlice'

function Chat({ socket, username, room }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
