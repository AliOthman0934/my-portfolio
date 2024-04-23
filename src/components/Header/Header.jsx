import React,{useEffect,useRef} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "../../Assets/menu.svg"; 
import gsap from "gsap";


function Header() {
    let text1 = useRef();
    let text2 = useRef();
    let text3 = useRef();
    let text4 = useRef();
    let text5 = useRef();

    useEffect(()=>{
        const tl = gsap.timeline();
        tl.from([text1.current , text2.current , text3.current , text4.current , text5.current],{
            duration:3,
            y:20,
            delay:2,
            stagger:{
                amount:0.6
            }
        })
    },[])
    return (
        <div>
            <header>
                <div id="logo"></div>
                <div className="toggle-menu">
                    <img src={MenuIcon} alt="Menu" />
                </div>
                <ul className="menu-items">
                    <li ref={text1}>
                        <Link to={"/"} className="Li">Home</Link>
                    </li>
                    <li ref={text2}>
                        <Link to={"/about"} className="Li">About</Link>
                    </li>
                    <li ref={text3}>
                        <Link  to={"/projects"} className="Li" >Projects</Link>
                    </li>
                    <li ref={text4}>
                        <Link to={"/contact"} className="Li">Contact</Link>
                    </li>
                    <li ref={text5}>
                        <Link to={""} className="Li">Youtube</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;





