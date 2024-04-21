import React from "react";
import "./Contact.css"
import Header from "../Header/Header";
import flower from "../../Assets/flower.svg"
import Footer from "../Footer/Footer";

function Contact(){
    return(
        <div>
            <Header></Header>
            <div className="contact-page">
                < div className="contact-page-container">
                    <h1>
                        Let's talk about <br/> the project? <img src={flower} alt=""></img>
                    </h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact;