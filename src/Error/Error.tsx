import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      Invalid Route
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Error
