import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import cel from '../../static/imagens/cel.jpg';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import Slide from '../../components/shared/Slide';
import capinha from '../../static/imagens/capinha.jpg';
import slide from '../../static/imagens/slide2.jpg'
import CardInfo from '../../components/shared/CardInfo';
import banner from '../../static/imagens/banner.jpg'
import carrinho from '../../static/icons/carrinho2.png';
import ver_mais from '../../static/icons/ver_mais.png';
import acessorios from '../../static/imagens/acessorios.jpg';


export default class Home extends Component{
    render(){
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Slide title="Slide aqui" text="Corpo do texto" slide={ slide } />
                    <Banner title="Celulares" foto={ banner } link="/celulares"/>
                    <ul className="list-card">
                        <li>
                            <CardInfo 
                                imagem={ cel } 
                                titleHover="Celular" 
                                title="Celular" 
                                subtitle="100,00"
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                                linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                             />
                        </li>
                        <li>
                        <CardInfo 
                            imagem={ cel } 
                            titleHover="Celular" 
                            title="Celular" 
                            subtitle="100,00"
                            text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                            linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                            linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                        <li>
                        <CardInfo 
                            imagem={ cel } 
                            titleHover="Celular" 
                            title="Celular" 
                            subtitle="100,00"
                            text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                            linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                            linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                        <li>
                        <CardInfo 
                            imagem={ cel } 
                            titleHover="Celular" 
                            title="Celular" 
                            subtitle="100,00"
                            text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                            linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                            linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                    </ul>

                    <Banner title="Acessórios" foto={ acessorios } link="/acessorios"/>
                    <ul className="list-card">
                        <li>
                            <CardInfo 
                                imagem={ capinha } 
                                titleHover="Capinha de celular" 
                                title="Capinha de celular" 
                                subtitle="50,00"
                                text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                                linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                                linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                        <li>
                        <CardInfo 
                            imagem={ capinha } 
                            titleHover="Capinha de celular" 
                            title="Capinha de celular" 
                            subtitle="50,00"
                            text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                            linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                            linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                        <li>
                        <CardInfo 
                            imagem={ capinha } 
                            titleHover="Capinha de celular" 
                            title="Capinha de celular" 
                            subtitle="50,00"
                            text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                            linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                            linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                        <li>
                        <CardInfo 
                            imagem={ capinha } 
                            titleHover="Capinha de celular" 
                            title="Capinha de celular" 
                            subtitle="50,00"
                            text="React é uma biblioteca JavaScript para construção de interfaces de usuário"
                            linkButton1="/carrinho" nameButton1="Carrinho" icon1={ carrinho } altIcon1="Carrinho"
                            linkButton2="/produto/id" nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                            />
                        </li>
                    </ul>
                </Container>
            </main>
        );
    }
}