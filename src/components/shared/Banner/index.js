import React from 'react';
import './style.css';
import banner from './banner2.png'


const Banner = () =>{
    return (
        <div className="content-banner">
            <div className="titulo">
                <hr/><a href="#"><h1>Front-End</h1></a><hr/>
            </div>
            <div className="banner">
              <a href="#"><img src={ banner } alt="Banner"/></a>  
            </div>
        </div>
    );
}

export default Banner;