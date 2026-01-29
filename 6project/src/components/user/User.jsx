import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <>
      user : {userid}
    </>
  )
}

export default User
