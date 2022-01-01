import React from 'react'

function LoginForm(props) {
  return (
    <div>
      <h3>Join Chat</h3>
      <input
        onChange={(e) => props.setUsername(e.target.value)}
        type="text"
        placeholder="john..."
      />
      <input
        onChange={(e) => props.setRoom(e.target.value)}
        placeholder="room id"
      />
      <button onClick={props.joinRoom}>Join a room</button>
    </div>
  )
}

export default LoginForm
