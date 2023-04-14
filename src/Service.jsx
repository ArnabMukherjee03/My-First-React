import React from "react";
import Card from "./card";
import Carddata from "./Carddata"
const Service = ()=>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Carddata.map((val)=>{
                                        return <Card
                                            imgsrc = {val.imgsrc}
                                            title = {val.title}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;