import React, {useContext}from "react";
import UserContext from '../Context/UserContext';
import { Link } from "@reach/router";
import homeButton from "../Images/homebutton.png";

function Header() {
	const {  user } = useContext(UserContext);

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

      <span></span>
    </div>
  );
}
export default Header;
