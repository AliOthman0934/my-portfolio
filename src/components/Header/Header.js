import React ,{useEffect , useRef} from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import MenuIcon from "../../Assets/menu.svg"
import gsap from "gsap"
// import { Timeline } from "gsap/gsap-core";


function Header(){
    const timeline = gsap.timeline();
    let li1 = useRef(null)
    let li2 = useRef(null)
    let li3 = useRef(null)
    let li4 = useRef(null)
    let li5 = useRef(null)

    useEffect(()=>{
        timeline.from([li1,li2,li3,li4,li5],{
            opacity: 0,
            duration:1,
            delay:2,
            y:20,
            stagger:{
                amount:.6
            }
        })
    })
    return(
        <div>
            <header>
                <div id="logo"></div>
                <div className="toggle-menu">
                    <img src={MenuIcon} alt=""/>
                </div>
                <ul className=" menu-items">
                    <li ref={el => li1 = el}>
                        <Link to={"/"} className="Li">Home</Link>
                    </li>
                    <li ref={el => li2 = el}>
                        <Link to={"/about"} className="Li">About</Link>
                    </li>
                    <li ref={el => li3 = el}>
                        <Link to={"/projects"} className="Li">Projects</Link>
                    </li>
                    <li ref={el => li4 = el}>
                        <Link to={"/contact"} className="Li">Contact</Link>
                    </li>
                    <li ref={el => li5 = el}>
                        <Link to={""} className="Li">Youtube</Link>
                    </li>
            
                </ul>
            </header>
        </div>
    )
}

export default Header