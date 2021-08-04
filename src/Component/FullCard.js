 import React from 'react';
 import {useParams} from 'react-router-dom'

function FullCard({lists}) {
    const {personName} = useParams();
    return (
        <section className="full">
        <div className="container">
            {lists.filter(people => people.name===personName).map((people,index)=>{
                return (
            <div key={index} className="fullcard" >
           <ul >
               <img src = "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt = "profile Pics" />
            <li >
               <p><span className="Intro">Name: </span><span className="response">{people.name}</span></p>
               <p><span className="Intro">Gender: </span><span  className="response">{people.gender}</span></p>
               <p><span className="Intro">Height: </span><span  className="response">{people.height}</span></p>
            
            </li>
    
            
            </ul>
          </div>
                    )})};
        </div>
        </section>
        
    );
};

export default FullCard;