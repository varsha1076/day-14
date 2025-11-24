import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyHotelWebsite</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/bookings">Bookings</Link>

        <button
          className="dark-toggle"
          onClick={() => document.body.classList.toggle("dark-mode")}
        >
          🌙
        </button>
      </div>
    </nav>
  );
}
