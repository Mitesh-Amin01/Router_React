import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function navbar() {
  return (
    <div id='div'>
        <Link to="/">Home</Link>
        <Link to="/contect">Contect</Link>
        <Link to="/about">About</Link>
    </div>
  )
}
