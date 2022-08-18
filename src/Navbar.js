import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css";

function Navbar() {

  return (
    <div className="nav">
    <div className="nav_home">
    <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue'} : {color: 'black'})}  to="/">HOME</NavLink>
    </div>
    <div className="nav_right">
      <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'blue'} : {color: 'black'})} to="/bookmarks">BOOKMARKS</NavLink>
    </div>
  </div>
  )
}

export default Navbar