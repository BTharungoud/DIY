import React, { useState } from "react";
import "./Navbar.css"

function Navbar() {

  return (
    <>
    <div className="Navbarparent">
    <nav class="Navbar">
        <a href='/' class="navbar-link">Home</a>
        <a href='/register' class="navbar-link">Signup</a>
        <a href='/login' class="navbar-link">Login</a>
        <a href='/menuAdmin' class="navbar-link">Menu</a>
    </nav>
      </div>
    </>
  );
}

export default Navbar;