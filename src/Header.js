import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
        <NavLink className="tabel" to="/">Tabel</NavLink>
        <NavLink className="tabel" to="/input">Create Data</NavLink>
    </div>
  )
}
