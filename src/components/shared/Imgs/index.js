import React, { Component } from 'react';
import './style.css';

export default class Img extends Component{
    componentDidMount(){
        let cp = document.querySelector('.default-img');
        switch(this.props.estilo){
            case 'little':
                cp.classList.add('little')
                break;
            case 'medium':
                cp.classList.add('medium')
                break;
            case 'big':
                cp.classList.add('big')
                break;
            default:
                cp.classList.add('default-img')
                break;
        }
    }
    render(){
        return(
            <div className="default-img hover">
                <img src={ this.props.image } alt={ this.props.alt } estilo={ this.props.tipo }/>
            </div>
        );
    }
}