const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

app.use(cors())

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const roomPopulation = {
  'The Watercooler': [],
  'The Feelings Room': [],
  'Mid-Life Crisis': [],
}

io.on('connection', (socket) => {
  console.log('user connected', socket.id)

  socket.on('join_room', async (room, username) => {
    await socket.join(room)
    roomPopulation[room].push(username)
    console.log(`user with id ${socket.id} joined the room ${room}`)
    io.emit('population_changed', roomPopulation)
    socket.data.username = username
    socket.data.room = room
  })

  socket.on('send_message', (data) => {
    console.log(data)
    io.emit('recieve_message', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.data.username)
    const { room } = socket.data
    if (room) {
      roomPopulation[room] = roomPopulation[room].filter(
        (user) => user != socket.data.username
      )
      io.emit('population_changed', roomPopulation)
    }
  })
})

server.listen(3001, () => {
  console.log('Server Running')
})
