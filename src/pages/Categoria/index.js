import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import cel from '../../static/imagens/cel.jpg';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import banner from '../../static/imagens/banner.jpg';
import CardInfo from '../../components/shared/CardInfo';

export default class Categoria extends Component{
    render(){
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Categoria" foto={ banner } link="#"/>
                    <fieldset className="config">
                        <legend>Ordenar por</legend>
                        <div className="filtro">
                            <div className="div-select">
                                <label for="subcategoria">Subcategoria:</label> 
                                <select id="subcategoria" name="select-subcategoria" className="select">
                                    <option value="Todas" selected>Todas</option>
                                    <option value="subcategoria1">Subcategoria 1</option>
                                    <option value="subcategoria2">Subcategoria 2</option>
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="alfa">A - Z:</label>
                                <select id="alfa" name="select-alfa" className="select">
                                    <option value="Todas" selected>Todas</option>
                                    <option value="a">A</option>
                                    <option value="b">B</option>
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="preco">Preço:</label>
                                <select id="preco" name="select-preco" className="select">
                                    <option value="Todos" selected>Todos</option>
                                    <option value="preco1">R$ 10 - R$ 100</option>
                                    <option value="preco2">R$ 100 - R$ 200</option>
                                    <option value="preco3">R$ 200 - R$ 300</option>
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="marca">Marca:</label>
                                <select id="marca" name="select-marca" className="select">
                                    <option value="Todas" selected>Todas</option>
                                    <option value="marca1">Marca 1</option>
                                    <option value="marca2">Marca 2</option>
                                    <option value="marca3">Marca 3</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
                    <div className="produtos">
                        <ul className="list-card">
                            <li>
                                <CardInfo 
                                    imagem={ cel } 
                                    titleHover="Celular" 
                                    title="Celular" 
                                    text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                    linkButton1="/produto/id" nameButton1="Compartilhar"
                                    linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                            <li>
                            <CardInfo 
                                imagem={ cel } 
                                titleHover="Celular" 
                                title="Celular" 
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/produto/id" nameButton1="Compartilhar"
                                linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                            <li>
                            <CardInfo 
                                imagem={ cel } 
                                titleHover="Celular" 
                                title="Celular" 
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/produto/id" nameButton1="Compartilhar"
                                linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                            <li>
                            <CardInfo 
                                imagem={ cel } 
                                titleHover="Celular" 
                                title="Celular" 
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/produto/id" nameButton1="Compartilhar"
                                linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                        </ul>
                    </div>
                </Container>
            </main>
        );
    }
}