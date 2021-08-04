import React from 'react';
import './App.css'
import {Link} from 'react-router-dom'

function Card({lists}) {
  // if (lists){
  //   console.log(lists)
  // }
    return (
      lists.map((people, index)=>{
        return(
          <div key={index} className="card">
            <ul >
          <img src = "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt = "" />
       <li >
          <p><span className="Intro">Name: </span><span className="response">{people.name}</span></p>
          <p><span className="Intro">Gender: </span><span  className="response">{people.gender}</span></p>
          <p><span className="Intro">Height: </span><span  className="response">{people.height}</span></p>
       
       </li>
       </ul>
       <Link className="Link"target="_self" to={`/cards/${people.name}`}>View More</Link>
         </div>
          // console.log(people.name,people.gender,people.height)
        
        )
      })
          )
}

export default Card;