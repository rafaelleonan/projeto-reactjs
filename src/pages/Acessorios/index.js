import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import Container from '@material-ui/core/Container';
import Banner from '../../components/shared/Banner';
import acessoriosBanner from '../../static/imagens/acessorios.jpg';
import CardInfo from '../../components/shared/CardInfo';
import Botao from '../../components/shared/Botao';
import ver_mais from '../../static/icons/ver_mais.png';
import api from '../../services/api';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';


export default class Acessorios extends Component{
    state = {
        acessorios:[]
    }
    loadAcessorios = () =>{
        axios.get(api+'/selectproduct?op=totalporcat&namecat=acessorios&pag=1').then(response => {
            console.log(response)
            this.setState({ acessorios:response.data })
        }, response =>{
            console.log(response)
        })
    }
    componentDidMount(){
        this.loadAcessorios()
    }
    render(){
        const { acessorios } = this.state;
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Acessórios" foto={ acessoriosBanner } link="#"/>
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
                        {acessorios.map(acessorio =>(
                            <Grid item xs={3}>
                                <CardInfo 
                                imagem={ acessorio.url } 
                                titleHover={ acessorio.nameproduct }
                                title={ acessorio.nameproduct } 
                                subtitle={ acessorio.value }
                                id={ acessorio.id }
                                text={ acessorio.description }
                                linkButton2={`/produto/${acessorio.id}`} nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
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
