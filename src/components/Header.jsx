import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogOutCircle } from 'react-icons/bi';
const Header = () => {
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <NavLink
          style={({ isActive }) => isActive ? activeStyle : null}
          to="host">
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => isActive ? activeStyle : null}
          to="about">
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => isActive ? activeStyle : null}
          to="vans" >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <BsPersonCircle className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>
          <BiLogOutCircle />
        </button>
      </nav>
    </header>
  )
}

export default Header