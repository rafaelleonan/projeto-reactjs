import React, { Component } from 'react'
import './style.css';
//import slide from '../../../static/imagens/slide2.jpg'

export default class Slide extends Component {
    render(){
        return(
        <div className="slide">
            <img src={ this.props.slide } alt="Slide"/>
            <div className="conteudo-slide">
                <h1>{ this.props.title }</h1>
                <p>
                    { this.props.text }
                </p>
            </div>
        </div>
        );
    };
}

