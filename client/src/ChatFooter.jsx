import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { useSelector, useDispatch } from 'react-redux'

import {
  selectChat,
  changeMessageInput,
  addMessageToChatLog,
} from './features/chat/chatSlice'
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material'

export default function ChatFooter(props) {
  const [value, setValue] = React.useState(0)

  const chatState = useSelector(selectChat)
  const dispatch = useDispatch()
  const { socket } = props

  const handleInputChange = (e) => {
    dispatch(changeMessageInput(e.target.value))
  }

  const sendMessage = async (e) => {
    if (chatState.inputMessage !== '') {
      const messageData = {
        room: chatState.currentRoom,
        author: chatState.currentUsername,
        message: chatState.inputMessage,
        time: `${new Date(Date.now()).getHours()} : ${new Date(
          Date.now()
        ).getMinutes()}`,
      }
      await socket.emit('send_message', messageData)
      dispatch(addMessageToChatLog(messageData))
      dispatch(changeMessageInput(''))
    }
  }

  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={11}>
            <Input
              sx={{
                width: 1,
                backgroundColor: 'white',
                borderRadius: '4em',
                pl: 2,
                '&::before': {
                  border: 'none',
                },
              }}
              disabled={chatState.currentRoom ? false : true}
              placeholder="Write your message here..."
              onChange={handleInputChange}
              onKeyPress={(e) => {
                e.key === 'Enter' && sendMessage()
              }}
              value={chatState.inputMessage}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={sendMessage} variant="contained">
              <SendIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
