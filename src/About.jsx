import React from "react";
import Common from "./common";
import Webabout from "./Images/about.jpg"
const About = ()=>{
    return(
        <>
           <Common
            name = "Welcome to About Us "
            spanName = ""
            imgsrc ={Webabout}
            visit = "/contact"
            btnname = "Contact Us"
        />
        </>
    )
}

export default About;