import React, { Component} from 'react';
import './style.css';
import logo from '../../../static/icons/logo.png';
import lupa from '../../../static/icons/lupa.png';
import { Link } from 'react-router-dom'; 

export default class Header extends Component{
    render(){
        return(
            <div className="content">
                <header id="header">
                    <Link to="/" className="a-logo">
                        <img src={ logo } className="logo" alt="Logo"/>
                    </Link>
                    <div className="div-search">
                        <input type="search" name="search" placeholder="Pesquise algo"/>
                        <button type=""><img src={ lupa } alt="Lupa" id="lupa"/></button>
                    </div>
                    <div className="div-list">
                        <ul className="list-options">
                            <li><Link to="/celulares">Celulares</Link></li>
                            <li><Link to="/acessorios">Acessórios</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}