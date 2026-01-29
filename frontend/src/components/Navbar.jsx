import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
        <div>
            <img src={logo} alt="RoadSight logo" className="h-10 w-10" />
            <span className="font-bold text-xl">RoadSight</span>
        </div>
        <div>
            <Link to="/" className="hover:text-gray-300" > Home </Link>
            <Link to="/upload" className="hover:text-gray-300" > Upload </Link>
        </div>
    </nav>
  )
}

export default Navbar