import React from 'react'
import { useSelector } from 'react-redux'
import ChatBubble from './ChatBubble'
import { selectChat } from './features/chat/chatSlice'
import ScrollToBottom from 'react-scroll-to-bottom'

const chatBodyStyling = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
}

function ChatBody() {
  const chatState = useSelector(selectChat)

  return (
    <div style={chatBodyStyling}>
      <ScrollToBottom>
        {chatState.chatLog.map((messageObj) => {
          return <ChatBubble messageObj={messageObj} />
        })}
      </ScrollToBottom>
    </div>
  )
}

export default ChatBody
