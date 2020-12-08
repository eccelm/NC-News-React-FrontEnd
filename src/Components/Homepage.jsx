import React from 'react';
import {Link} from '@reach/router'

function Homepage() {
  return (
    <div className="Homepage">

     <h1>NC NEWS</h1>
      <h2>Hello and welcome to the ncnews app!</h2>

      <Link to="/articles"><button>Take me to all articles</button></Link>

 </div>
  )
}
export default Homepage;