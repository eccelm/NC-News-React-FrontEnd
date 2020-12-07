import React from 'react';
import {Link} from '@reach/router'

function Homepage() {
  return (
    <div className="Homepage">

        <p>Hello and welcome to the ncnews app!</p>
      <h2>Click on any of the article topics to get started</h2>

      <Link to="/articles"><button>Take me to all articles</button></Link>

      <button>Coding</button>
      <button>Football </button>
      <button>Cooking</button>
 </div>
  )
}
export default Homepage;