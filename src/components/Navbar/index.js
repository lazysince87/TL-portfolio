import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (

    <div className = "navbar">
        <div className = "links">
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/experience">experience</Link>
        </div>
    </div>
  )
}

export default Navbar