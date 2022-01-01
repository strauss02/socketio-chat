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
    <Grid sx={{ mt: 20, mb: 12, width: '100vw' }} container>
      {chatState.chatLogs[chatState.currentRoom]
        ? chatState.chatLogs[chatState.currentRoom].map((messageObj) => {
            return (
              <Grid
                item
                sx={{ pl: 2, pr: 2, pt: 1 }}
                className="sababa"
                xs={12}
              >
                <ChatBubble messageObj={messageObj} />
              </Grid>
            )
          })
        : ''}
    </Grid>
  )
}

export default ChatBody
