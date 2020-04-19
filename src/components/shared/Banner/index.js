import React from 'react';
import './style.css';
import banner from '../../../static/imagens/banner.jpg'


const Banner = () =>{
    return (
        <div className="content-banner">
            <div className="titulo">
                <hr/><a href="#"><h1>Celulares</h1></a><hr/>
            </div>
            <div className="banner">
              <a href="#"><img src={ banner } alt="Banner"/></a>  
            </div>
        </div>
    );
}

export default Banner;