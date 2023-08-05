import React from 'react'
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/contect">Contect</Link>
        <Link to="/about">About</Link>
    </div>
  )
}
