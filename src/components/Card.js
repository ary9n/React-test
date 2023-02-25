import React from "react"
import star from "A:\\React\\airbnb-clone\\src\\images\\Star.png"

export default function Card(props){
    return(
        <div className="w-100 p-3">
            <img src={`.\\${props.coverImg}`} alt={props.coverImg} />
            <div className="d-flex">
                <img src={star} />
                <p>{props.rating}</p>
                <p>({props.reviewCount})</p>
                <p>{props.location}</p>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b>/person</p>
        </div>
    )
}