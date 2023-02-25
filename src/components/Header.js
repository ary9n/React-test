import React from "react"
import logo from "A:\\React\\airbnb-clone\\src\\images\\airbnblogo.png"

export default function header(){
    return(
        <nav className="d-flex navbar navbar-expand-lg navbar-light bg-light shadow bg-body">
            <img src={logo} className="navbar-brand ms-4" id="airlogo" />
        </nav>
    )
}
