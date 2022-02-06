import React from "react"
import Logo from "../images/airbnb.png"

export default function Nav(){
    return(
        <nav>
            <img src={Logo} alt="Logo" className="nav--logo"/>
        </nav>
    )
}