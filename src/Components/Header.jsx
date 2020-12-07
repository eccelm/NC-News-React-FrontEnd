import React from 'react';
import {Link} from '@reach/router'

function Header() {
  return (
    <div className="Header">
    <h1>NC NEWS</h1>
    <span></span>
  
    <Link to="/">  <button>This will link to the homepage</button></Link>
 </div>
  )
}
export default Header;