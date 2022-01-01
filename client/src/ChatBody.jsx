import React from 'react'
import { useSelector } from 'react-redux'
import ChatBubble from './ChatBubble'
import { selectChat } from './features/chat/chatSlice'
import { Grid } from '@mui/material'

function ChatBody() {
  const chatState = useSelector(selectChat)

  return (
    <Grid sx={{ mt: 12, mb: 12, width: '100vw' }} container>
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
