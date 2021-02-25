import React, {useContext}from "react";
import UserContext from '../Context/UserContext';
import { Link } from "@reach/router";
import homeButton from "../Images/homebutton.png";

function Header() {
	const {  user, setUser } = useContext(UserContext);

  return (
    <div className="Header">
      <p style={{color: `white`}}>Logged in as: {user.username}</p>
      <Link to="/">
        {" "}
        <img
          src={homeButton}
          alt="home button"
          height="50"
          width="50"
          className="home-button"
        />{" "}
      </Link>
<button onClick={()=>{
  setUser(    {
    username: 'guest',
    name: 'guest',
    avatar: ''
 })
  alert(`you are logging out`)}}>
  LOGOUT
</button>
      <span></span>
    </div>
  );
}
export default Header;
