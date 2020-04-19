import React from 'react';
import './style.css';
import logo from '../../../static/icons/logo.png';
import lupa from '../../../static/icons/lupa.png';


const Header = () => (
<header id="header">
    <img src={ logo } className="logo" alt="Logo"/>
    <div className="div-search">
        <input type="search" name="search" placeholder="Pesquise algo"/>
        <button type=""><img src={ lupa } alt="Lupa" id="lupa"/></button>
    </div>
    <div className="div-list">
        <ul className="list-options">
            <li><span>Entrar</span></li>
            <li><span>Cadastrar</span></li>
        </ul>
    </div>
</header>
);

export default Header;
