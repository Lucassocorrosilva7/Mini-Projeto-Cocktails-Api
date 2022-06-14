import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div>
  )
}

export default Error