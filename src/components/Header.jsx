import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import "./Header.css";


function Header () {

    return (
        <div className="header">
            <h1>Header</h1>
            <DarkModeToggle/>
        </div>
        /* <div>
             <ProfileComponent />
         </div> */ 
    );
}

export default Header