import React from 'react';
import './style.css';
import logo from '../../../static/icons/logo.png';
import lupa from '../../../static/icons/lupa.png';
import carrinho from '../../../static/icons/carrinho.png';
import opcoes from '../../../static/icons/opcoes.png';


const Header = () => (
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
                <li> <a href="/carrinho"><img src={ carrinho } alt="Carrinho"/></a></li>
                <li><img src={ opcoes } alt="Mais opções"/></li>
            </ul>
        </div>
    </header>
    <div className="menu">
        <ul className="menu-list">
            <li><a href="/acessorios"><button type="button">Acessórios</button></a></li>
            <li><a href="/celulares"><button type="button">Celulares</button></a></li>
            <li><a href="/ajuda"><button type="button">Fale conosco</button></a></li>
            <li><a href="/ajuda"><button type="button">Ajuda</button></a></li>
        </ul>
    </div>
</div>
);

export default Header;
