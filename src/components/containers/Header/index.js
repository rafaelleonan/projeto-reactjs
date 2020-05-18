import React, { Component} from 'react';
import './style.css';
import logo from '../../../static/icons/logo.png';
import lupa from '../../../static/icons/lupa.png';


export default class Header extends Component{
    render(){
        return(
            <div className="content">
                <header id="header">
                    <a href="/" className="a-logo">
                        <img src={ logo } className="logo" alt="Logo"/>
                    </a>
                    <div className="div-search">
                        <input type="search" name="search" placeholder="Pesquise algo"/>
                        <button type=""><img src={ lupa } alt="Lupa" id="lupa"/></button>
                    </div>
                    <div className="div-list">
                        <ul className="list-options">
                            <li><a href="/celulares">Celulares</a></li>
                            <li><a href="/acessorios">Acessórios</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}