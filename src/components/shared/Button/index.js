import React, { Component } from 'react';
import './style.css';


export default class Button extends Component{
    componentDidMount(){
        let btn = document.querySelector('#button');
        switch(this.props.estilo){
            case 'info':
                btn.classList.add("info");
                break;
            case 'dark':
                btn.classList.add("dark");
                break;
            case 'danger':
                btn.classList.add("danger");
                break;
            default:
                btn.classList.add("padrao");
                break;
        }
    }
    render(){
        return(
            <button type={ this.props.tipo } id="button" estilo={ this.props.estilo }>
                { this.props.name }
            </button>
        );
    }
}