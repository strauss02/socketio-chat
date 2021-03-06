import { Typography, TextField, Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SelectRoom from './SelectRoom'

function LoginForm(props) {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '1rem 3rem',
        mt: 20,
        mb: 20,
      }}
    >
      <Box sx={{ textAlign: 'left' }}>
        <Typography variant="h4">Hey there! 👋</Typography>
        <Typography variant="body1">{`Welcome to the chat!`}</Typography>
        <Typography variant="body2">{` Pick a unique username and a room to enter`}</Typography>
      </Box>
      <TextField
        id="standard-basic"
        label="Username"
        variant="standard"
        onChange={(e) => props.setUsername(e.target.value)}
        placeholder="Pick a cool name"
      />

      <SelectRoom room={props.room} setRoom={props.setRoom} />

      <Button onClick={props.joinRoom}>Join a room</Button>
    </Paper>
  )
}

export default LoginForm
