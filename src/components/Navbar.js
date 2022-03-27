import React from "react"
import {Link} from "react-router-dom"
export const Navbar = () => {
  return ( 
  <nav className = "navbar navbar-expand-lg navbar-light bg-info" >
    <div className = "container" >
    <Link to = "/" className = "navbar-brand justify-content-start" > Amazon </Link>
    <div className = "collapse navbar-collapse justify-content-end"   id = "navbarNav" >
    <ul className = "navbar-nav" >
    <li key={"a"} className = "nav-item active" >
    <Link to = "/" className = "nav-link" > Home </Link>
    </li > &nbsp;
    <li key={"b"} className = "nav-item" >
    <Link to = "/cart" className = "nav-link" > Cart </Link> 
    </li >
     </ul> 
     </div >
      </div>
       </nav >
  )
}