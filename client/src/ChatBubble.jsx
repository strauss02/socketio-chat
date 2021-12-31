import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectChat } from './features/chat/chatSlice'

function ChatBubble({ messageObj }) {
  const chatState = useSelector(selectChat)

  const selfSentMessageStyling = {
    backgroundColor: 'green',
    height: 'auto',
  }
  const fellowSentMessageStyling = {
    backgroundColor: 'blue',
    height: 'auto',
  }

  const selfSentBoxStyling = {
    alignContent: 'flex-start',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 0,
      width: 150,
      maxWidth: 300,
      height: 'auto',
    },
  }
  const fellowSentBoxStyling = {
    alignContent: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 0,
      width: 150,
      maxWidth: 300,
      height: 'auto',
    },
  }

  return (
    <Box
      sx={
        messageObj.author === chatState.currentUsername
          ? selfSentBoxStyling
          : fellowSentBoxStyling
      }
    >
      <Paper
        style={
          messageObj.author === chatState.currentUsername
            ? selfSentMessageStyling
            : fellowSentMessageStyling
        }
      >
        <Typography variant="body2"> {messageObj.message}</Typography>
      </Paper>
      <Typography> {messageObj.author}</Typography>
      <Typography> {messageObj.time}</Typography>
    </Box>
  )
}

export default ChatBubble
