import React from "react";
import web from "../src/Images/headimg.jpg";
import Common from "./common";
const Home = ()=>{
    return(
        <>
        <Common
            name = "Grow your buisness with"
            spanName = "Nothing"
            imgsrc ={web}
            visit = "/about"
            btnname = "Get Started"
        />
        </>
    )
}

export default Home;