import React from 'react';
import './style.css';
import logo from './imagens/logo.png';
import lupa from './imagens/lupa.png';

const Header = () => (
    <header id="header">
        <img src={ logo } className="logo" alt="Logo"/>
        <div className="div-search">
            <input type="text" name="search" placeholder="Pesquise algo"/>
            <button type=""><img src={ lupa } alt="Lupa" id="lupa"/></button>
        </div>
        <div className="div-list">
            <ul className="list-options">
                <li><b>Entrar</b></li>
                <li><b>Cadastrar</b></li>
            </ul>
        </div>
    </header>
);

export default Header;