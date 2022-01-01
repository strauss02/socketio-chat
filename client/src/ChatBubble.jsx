import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectChat } from './features/chat/chatSlice'

function ChatBubble({ messageObj }) {
  const chatState = useSelector(selectChat)

  const selfSentMessageStyling = {
    backgroundColor: '#e4eaf0',
    height: 'auto',
    textAlign: 'left',
    padding: '1rem',
    borderRadius: '0px 5px 5px 5px',
  }
  const fellowSentMessageStyling = {
    borderRadius: '5px 0px 5px 5px',
    padding: '1rem',
    textAlign: 'left',
    backgroundColor: '#e8f0e4',
    height: 'auto',
  }

  const selfSentBoxStyling = {
    width: ' 100%',
    alignContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 0,
      width: 'auto',
      maxWidth: '50vw',
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
      <Box sx={{ textAlign: 'left' }}>
        <Typography variant="caption"> {messageObj.author}</Typography>
        <Typography variant="caption"> {messageObj.time}</Typography>
      </Box>
    </Box>
  )
}

export default ChatBubble
