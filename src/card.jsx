import React from "react";
import { NavLink } from "react-router-dom";

const card =(Props)=>{
    return(
        <div className="col-md-4 col-10 mx-auto">
              <div className="card">
                      <img src={Props.imgsrc} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{Props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink className="btn btn-primary">Explore</NavLink>
                      </div>
              </div>
        </div>
    )
}

export default card;