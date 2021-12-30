import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'

import { useSelector, useDispatch } from 'react-redux'

import { selectChat, changeMessageInput } from './features/chat/chatSlice'

const ariaLabel = { 'aria-label': 'description' }

export default function ChatFooter() {
  const [value, setValue] = React.useState(0)

  const chatState = useSelector(selectChat)
  const dispatch = useDispatch()
  const socket = chatState.socket

  const handleInputChange = (e) => {
    dispatch(changeMessageInput(e.target.value))
  }

  const sendMessage = async () => {
    if (chatState.inputMessage !== '') {
      const messageData = {
        room: chatState.currentRoom,
        author: chatState.currentUsername,
        message: chatState.inputMessage,
        time: `${new Date(Date.now()).getHours()} : ${new Date(
          Date.now()
        ).getMinutes()}  `,
      }
      await socket.emit('send_message', messageData)
    }
  }

  return (
    <Box sx={{ width: 500 }}>
      <Input
        defaultValue="Hello world"
        inputProps={ariaLabel}
        onChange={handleInputChange}
      />
      <Button variant="contained">Send Message </Button>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}