import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import MenuIcon from "../../Assets/menu.svg"

function Header(){
    return(
        <div>
            <header>
                <div id="logo"></div>
                <div className="toggle-menu">
                    <img src={MenuIcon} alt=""/>
                </div>
                <ul className=" menu-items">
                    <li>
                        <Link to={"/"} className="Li">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="Li">About</Link>
                    </li>
                    <li>
                        <Link to={"/projects"} className="Li">Projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="Li">Contact</Link>
                    </li>
                    <li>
                        <Link to={""} className="Li">Youtube</Link>
                    </li>
            
                </ul>
            </header>
        </div>
    )
}

export default Header