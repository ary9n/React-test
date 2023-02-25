import React from "react"
import photoGrid from "A:\\React\\airbnb-clone\\src\\images\\photGrid.JPG"

export default function Hero(){
    return(
        <div>
            <div className="m-5 Hero d-flex flex-column align-items-center justify-content-center">
                <img src={photoGrid} className="" id="picgrid" />
            </div>
            <div className="d-flex flex-column justify-content-center ms-4 sec2">
                <h2>Online Experiences</h2>
                <p className="fw-light">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}