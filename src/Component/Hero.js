import React from 'react';
import Card from './Card';



function Hero({lists}) {
    // if (lists){
    //   console.log(lists)
    // }
    return (
        <section className="hero">
            <div className="container">
            <Card lists ={lists} />
      
            </div>
        </section>
    );
}

export default Hero;
