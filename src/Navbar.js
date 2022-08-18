import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";

function Navbar() {
  return (
    <div className="nav">
    <div className="nav_home">
      <nav><Link to="/">HOME</Link></nav>
    </div>
    <div className="nav_right">
      <nav> <Link to="/bookmarks">Bookmarks</Link>
      </nav>
    </div>
  </div>
  )
}

export default Navbar