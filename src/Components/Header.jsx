import React from "react";
import { Link } from "@reach/router";
import homeButton from "../Images/homebutton.png";

function Header() {
  return (
    <div className="Header">
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
