import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h1>{props.myproduct.Title}</h1>
            <p>{props.myproduct.description}</p>
            <p>{props.myproduct.price}</p>
            <button onClick= {props.myClick} >Add To Cart</button>
        </div>
    )
}