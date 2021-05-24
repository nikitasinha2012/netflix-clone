import React, { useEffect, useState } from "react";
import "./Nav.css";
import someimage from "./download.png";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
  
 <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <a href="/"><img src={someimage} alt="Netflix Logo" className="nav_logo"/></a>
     
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Avatar"
      />
    </div>


  


    
    
   
  );
}

export default Nav;
