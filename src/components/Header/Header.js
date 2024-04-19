import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <header>
                <div id="logo"></div>
                <div className="toggle-menu"></div>
                <ul className=" menu-items">
                    <li>
                        <Link to={"/"} className="Link">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="Link">About</Link>
                    </li>
                    <li>
                        <Link to={"/projects"} className="Link">Projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="Link">Contact</Link>
                    </li>
                    <li>
                        <Link to={""} className="Link">Youtube</Link>
                    </li>
            
                </ul>
            </header>
        </div>
    )
}

export default Header