import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useSelector } from 'react-redux'
import { selectChat } from './features/chat/chatSlice'
import List from '@mui/material/List'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'

export default function Header() {
  const chatState = useSelector(selectChat)

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const drawerWidth = 240

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: 1,
        zIndex: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {chatState.currentRoom}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            sx={{
              mr: 'auto',
              pl: '1rem',
            }}
          >
            Chat Participants
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List
          sx={{
            padding: '1rem',
            height: '100%',
          }}
        >
          {chatState.roomPopulation[chatState.currentRoom] ? (
            chatState.roomPopulation[chatState.currentRoom].map((user) => {
              return <Typography> {user}</Typography>
            })
          ) : (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography color={'GrayText'} variant="subheading">
                {' '}
                join a chat to see who's here{' '}
              </Typography>
            </Box>
          )}
        </List>
      </Drawer>
    </Box>
  )
}
