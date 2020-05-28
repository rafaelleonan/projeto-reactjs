import React, { Component } from 'react'
import './style.css';
//import slide from '../../../static/imagens/slide2.jpg'

export default class Slide extends Component {
    render(){
        return(
        <div className="slide">
            <img src={ this.props.slide } alt="Slide"/>
            <div className="conteudo-slide">
                <h3 className="afas">{ this.props.title }</h3>
                <p className="afas"> 
                    
                    { this.props.text }
                </p>
            </div>
        </div>
        );
    };
}

