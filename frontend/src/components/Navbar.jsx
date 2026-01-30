import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="RoadSight Logo"
            className="h-15 w-15 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-semibold tracking-tight">
            RoadSight
          </span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-emerald-700 transition"
          >
            Home
          </Link>

          <Link
            to="/upload"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg
                       hover:bg-emerald-700 transition-all duration-300
                       shadow-sm hover:shadow-md"
          >
            Upload
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar