import React from 'react'
import { useSelector } from 'react-redux'
import ChatBubble from './ChatBubble'
import { selectChat } from './features/chat/chatSlice'
import ScrollToBottom from 'react-scroll-to-bottom'
import { Grid } from '@mui/material'

const chatBodyStyling = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
}

function ChatBody() {
  const chatState = useSelector(selectChat)

  return (
    <ScrollToBottom>
      <Grid sx={{ mt: 10, mb: 12 }} container>
        {chatState.chatLog.map((messageObj) => {
          return (
            <Grid item xs={12}>
              <ChatBubble messageObj={messageObj} />
            </Grid>
          )
        })}
      </Grid>
    </ScrollToBottom>
  )
}

export default ChatBody
