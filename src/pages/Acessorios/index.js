import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import capinha from '../../static/imagens/capinha.jpg';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import acessorios from '../../static/imagens/acessorios.jpg';
import CardInfo from '../../components/shared/CardInfo';
import Button from '../../components/shared/Button';


export default class Acessorios extends Component{
    render(){
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Acessórios" foto={ acessorios } link="#"/>
                    <fieldset className="config">
                        <legend>Ordenar por</legend>
                        <div className="filtro">
                            <div className="div-select">
                                <label for="alfa">Ordem alfabética:</label>
                                <select id="alfa" name="select-alfa" className="select">
                                    <option value="Todas" selected>Aleatória</option>
                                    <option value="a_z"> A - Z</option>
                                    <option value="z_a"> Z - A</option>
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="preco">Preço:</label>
                                <select id="preco" name="select-preco" className="select">
                                    <option value="Todos" selected>Todos</option>
                                    <option value="preco1">Até R$ 50</option>
                                    <option value="preco2">R$ 51 - R$ 100</option>
                                    <option value="preco3">R$ 101 - R$ 150</option>
                                    <option value="preco3">R$ 151 - R$ 200</option>
                                    <option value="preco3">Acima de R$ 200</option>
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="marca">Marca:</label>
                                <select id="marca" name="select-marca" className="select">
                                    <option value="Todas" selected>Todas</option>
                                    <option value="apple">Apple</option>
                                    <option value="lg">LG</option>
                                    <option value="motorola">Motorola</option>
                                    <option value="samsung">Samsung</option>
                                    <option value="xiaomi">Xiaomi</option>
                                </select>
                            </div>
                            <div className="div-select">
                                <Button name="Aplicar" tipo="submit" estilo="padrao" ></Button>
                            </div>
                        </div>
                    </fieldset>
                    <div className="produtos">
                        <ul className="list-card">
                            <li>
                                <CardInfo 
                                    imagem={ capinha } 
                                    titleHover="Capinha de celular" 
                                    title="Capinha de celular" 
                                    subtitle="R$ 50,00"
                                    text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                    linkButton1="/produto/id" nameButton1="Compartilhar"
                                    linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                            <li>
                            <CardInfo 
                                imagem={ capinha } 
                                titleHover="Capinha de celular" 
                                title="Capinha de celular" 
                                subtitle="R$ 50,00"
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/produto/id" nameButton1="Compartilhar"
                                linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                            <li>
                            <CardInfo 
                                imagem={ capinha } 
                                titleHover="Capinha de celular" 
                                title="Capinha de celular" 
                                subtitle="R$ 50,00"
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/produto/id" nameButton1="Compartilhar"
                                linkButton2="/produto/id" nameButton2="Ver mais"
                                />
                            </li>
                            <li>
                            <CardInfo 
                                imagem={ capinha } 
                                titleHover="Capinha de celular" 
                                title="Capinha de celular" 
                                subtitle="R$ 50,00"
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
