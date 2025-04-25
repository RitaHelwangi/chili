import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav" style={{ margin: '0 auto' }}>
        <Link to="#">Food</Link>
        <Link to="#">Wines</Link>
        <Link to="#">Book Table</Link>
      </nav>
      <nav className="nav">
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  )
}
