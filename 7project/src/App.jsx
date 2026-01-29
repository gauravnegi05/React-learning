import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1>hellolllllllllllllllllllloooooooooooooo</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
