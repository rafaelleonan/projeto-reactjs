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
import lupa from '../../static/icons/lupa.png';




export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            products:[],
            acessorios:[],
            pesquisa:''
        }
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
    pesquisar = (e) =>{
        e.preventDefault();
        if(this.state.pesquisa){
           alert(this.state.pesquisa)
        }

    }
    componentDidMount(){
        this.loadProducts()
        this.loadAcessorios()
    }
    render(){
        const { products, acessorios, pesquisa } = this.state;
        return(
            <main className="default content">
                <Container maxWidth={ false } className="">
                    <div className="top-search">
                        <form onSubmit={ this.pesquisar }>
                            <div className="div-search">
                                <input type="search" defaultValue={ pesquisa } onChange={ (e) => this.setState({ pesquisa: e.target.value }) } name="search" placeholder="Pesquise algo"/>
                                <button type="submit"><img src={ lupa } alt="Lupa" id="lupa"/></button>
                            </div>
                        </form>
                    </div>
                    <Slide title="Slide aqui" text="Corpo do texto" slide={ slide } />
                    <Banner title="Celulares" foto={ banner } link="/celulares"/>
                    <Grid container spacing={1}   className="grid">
                       <div className="pptotal">
                        {products.map(product =>(
                            <Grid item xs={3} key={ product.id } className="griditem">  
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
                       </div>
                    </Grid>
                    <Banner title="Acessórios" foto={ banner } link="/acessorios"/>
                    <Grid container spacing={1} className="grid">
                    <div className="pptotal">
                        {acessorios.map(acessorio =>(
                            <Grid item xs={3} key={ acessorio.id } className="griditem">
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
                        </div>
                    </Grid>
                </Container>
            </main>
        );
    }
}