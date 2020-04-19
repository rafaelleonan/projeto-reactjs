import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import cel from '../../static/imagens/cel.jpg';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import Slide from '../../components/shared/Slide';
import slide from '../../static/imagens/slide2.jpg'
import CardInfo from '../../components/shared/CardInfo';
import banner from '../../static/imagens/banner.jpg'


export default class Home extends Component{
    render(){
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Slide title="Slide aqui" text="Corpo do texto" slide={ slide } />
                    <Banner title="Categoria" foto={ banner } link="/categoria"/>
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
                </Container>
            </main>
        );
    }
}