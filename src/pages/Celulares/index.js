import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import cel from '../../static/imagens/cel.jpg';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import banner from '../../static/imagens/banner.jpg';
import CardInfo from '../../components/shared/CardInfo';
import Botao from '../../components/shared/Botao';
import ver_mais from '../../static/icons/ver_mais.png';
import api from '../../services/api';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';


export default class Categoria extends Component{
    state = {
        products:[],
    }
    loadProducts = () =>{
        axios.get(api+'/selectproduct?op=totalporcat&namecat=celulares&pag=1').then(response => {
            console.log(response)
            this.setState({ products:response.data })
        }, response =>{
            console.log(response)
        })
    }
    componentDidMount(){
        this.loadProducts()
    }
    render(){
        const { products } = this.state;
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Celulares" foto={ banner } link="#"/>
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
                                    <option value="preco1">R$ 500 - R$ 600</option>
                                    <option value="preco2">R$ 601 - R$ 700</option>
                                    <option value="preco3">R$ 701 - R$ 800</option>
                                    <option value="preco3">R$ 801 - R$ 900</option>
                                    <option value="preco3">R$ 901 - R$ 1000</option>
                                    <option value="preco3">Acima de R$ 1000</option>
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
                                <Botao name="Aplicar" tipo="submit" estilo="padrao" ></Botao>
                            </div>
                        </div>
                    </fieldset>
                    <div className="produtos">
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3} 
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        >
                        {products.map(product =>(
                            <Grid item xs={3}>
                                <CardInfo 
                                imagem={ product.url } 
                                titleHover={ product.nameproduct }
                                title={ product.nameproduct } 
                                subtitle={ product.value }
                                id={ product.id }
                                text={ product.description }
                                linkButton2={`/produto/${product.id}`} nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                                />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                    </div>
                </Container>
            </main>
        );
    }
}