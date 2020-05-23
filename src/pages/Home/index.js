import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import Slide from '../../components/shared/Slide';
import slide from '../../static/imagens/slide2.jpg'
import CardInfo from '../../components/shared/CardInfo';
import banner from '../../static/imagens/banner.jpg'
import ver_mais from '../../static/icons/ver_mais.png';
import api from '../../services/api';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

export default class Home extends Component{
    state = {
        products:[],
        acessorios:[]
    }
    loadProducts = () =>{
        axios.get(api+'/selectproduct?op=totalporcat&namecat=celulares&pag=1').then(response => {
            this.setState({ products:response.data })
        }, response =>{
            console.log(response)
        })
    }
    loadAcessorios = () =>{
        axios.get(api+'/selectproduct?op=totalporcat&namecat=acessorios&pag=1').then(response => {
            this.setState({ acessorios:response.data })
        }, response =>{
            console.log(response)
        })
    }
    componentDidMount(){
        this.loadProducts()
        this.loadAcessorios()
    }
    render(){
        const { products, acessorios } = this.state;
        return(
            <main className="default content">
                <Container maxWidth={ false } className="">
                    <Slide title="Slide aqui" text="Corpo do texto" slide={ slide } />
                    <Banner title="Celulares" foto={ banner } link="/celulares"/>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3} 
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                        {products.map(product =>(
                            <Grid item xs={3} key={ product.id }>
                                <CardInfo 
                                imagem={ product.url } 
                                titleHover={ product.nameproduct }
                                title={ product.nameproduct } 
                                subtitle={ product.value }
                                id={ product.id }
                                text={ product.description }
                                linkButton2={`/produto/${product.id}`} nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Ver mais"
                                />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    <Banner title="Acessórios" foto={ banner } link="/acessorios"/>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3} 
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                        {acessorios.map(acessorio =>(
                            <Grid item xs={3} key={ acessorio.id }>
                                <CardInfo 
                                imagem={ acessorio.url } 
                                titleHover={ acessorio.nameproduct }
                                title={ acessorio.nameproduct } 
                                subtitle={ acessorio.value }
                                id={ acessorio.id }
                                text={ acessorio.description }
                                linkButton2={`/produto/${acessorio.id}`} nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Ver mais"
                                />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                </Container>
            </main>
        );
    }
}