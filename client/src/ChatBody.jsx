import React from 'react'
import { useSelector } from 'react-redux'
import ChatBubble from './ChatBubble'
import { selectChat } from './features/chat/chatSlice'

function ChatBody() {
  const chatState = useSelector(selectChat)

  return (
    <div>
      {chatState.chatLog.map((messageObj) => {
        return <ChatBubble messageObj={messageObj} />
      })}
    </div>
  )
}

export default ChatBody
