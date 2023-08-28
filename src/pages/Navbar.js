import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar (){
  return(
      <nav className='header navbar'>
  <ul>
  
  <li><Link to="/">Home</Link> </li>
  <li> <Link to="/about">About</Link> </li>
  <li> <Link to="/pokedex">Pokedex</Link> </li>
  </ul>
  
      </nav>
  )
  }
export default Navbar;
