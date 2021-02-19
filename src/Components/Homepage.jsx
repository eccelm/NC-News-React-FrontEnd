import React, { useContext } from 'react';
import {Link} from '@reach/router'

import UserContext from '../Context/UserContext'
function Homepage() {

  const {message} = useContext(UserContext)
  return (
    <div className="homepage">

     <h1>NC NEWS</h1>
     <p>{message}</p>
      <h2>Hello and welcome to the ncnews app!</h2>
      <Link to="/articles"><button>Take me to all articles</button></Link>
      <form>
        <p>This is the new user entry field</p>
        <input type="text"/>
        <input type="submit" value="create your account"/>
      </form>
 </div>
  )
}
export default Homepage;