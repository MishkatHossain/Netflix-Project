import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav(){

    // const [show, handleShow] = useState(false);    
    // useEffect(()=>{
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);
      
    const [show, handleShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    





    return ( 
        <div className={`nav ${show && "nav__black"}`}>
        {/* <div className="nav"> */}
            
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/640px-Netflix_Logomark.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png"
                alt="Netflix Logo"
            />
        </div>
    );
}

 
export default Nav;