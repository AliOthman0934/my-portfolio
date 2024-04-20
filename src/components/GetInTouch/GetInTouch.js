import React from "react";
import "./GetInTouch.css"
import flower2 from "../../Assets/flower2.svg"

function GetInTouch (){
    return(
        <div>
            <div className="get-in-touch">
                <h1>GET IN TOUCH</h1>
                <p>if you have any general project or enquiry feel free and contact me - available now! </p>
                <img src={flower2} alt=""></img>
            </div>
        </div>
    )
}

export default GetInTouch;