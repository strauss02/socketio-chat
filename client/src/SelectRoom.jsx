import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectRoom(props) {
  const handleChange = (e) => props.setRoom(e.target.value)

  return (
    <Box sx={{ mt: 1, minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Room</InputLabel>
        <Select
          variant="standard"
          label="Room"
          value={props.room}
          onChange={handleChange}
        >
          <MenuItem value={'The watercooler'}>The Watercooler</MenuItem>
          <MenuItem value={'The Feelings Room'}>The Feelings Room </MenuItem>
          <MenuItem value={'Mid-Life Crisis'}>Mid-Life Crisis</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
