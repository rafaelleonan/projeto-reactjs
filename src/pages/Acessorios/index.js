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
    constructor(props) {
        super(props);
        this.state = {
            acessorios:[],
            ordemAlfa:[{ value:'Normal', opcao:'Normal' },{ value:'CRESC', opcao:'Crescente' }, { value:'DESC', opcao:'Decrescente' }],
            ordemPreco:[{ value:'Todos', opcao:'Todos' },{ value:'1-50', opcao:'Até R$ 50' } , { value:'101-150', opcao:'R$ 101 - R$ 150' }, { value:'151-200', opcao:'R$ 151 - R$ 200' }, { value:'200-250', opcao:'R$ 200 - R$ 250' }],
            ordemMarca:[{ value:'Todas', opcao:'Todas' },{ value:'Apple', opcao:'Apple' }, { value:'LG', opcao:'LG' } , { value:'Motorola', opcao:'Motorola' } , { value:'Samsung', opcao:'Samsung' } , { value: 'Xiaomi', opcao: 'Xiaomi' }],
            ordem:'Normal',
            preco:'Todos',
            marca:'Todas'
        }
        this.handleChangeOrdem = this.handleChangeOrdem.bind(this);
        this.handleChangePreco = this.handleChangePreco.bind(this);
        this.handleChangeMarca = this.handleChangeMarca.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeOrdem(event) {
        this.setState({ordem: event.target.value});
    }
    handleChangePreco(event) {
        this.setState({preco: event.target.value});
    }
    handleChangeMarca(event) {
        this.setState({marca: event.target.value});
    }
    handleSubmit(event) {
        let filter = '?op=totalporcat&namecat=acessorios'
        if(this.state.ordem != 'Normal'){
            filter += `&order=${this.state.ordem}`
        }
        if(this.state.preco != 'Todos'){
            let preco = this.state.preco.split('-')
            let value1 = preco[0]
            let value2 = preco[1]
            filter += `&value1=${value1}&value2=${value2}`
        }
        if(this.state.marca != 'Todas'){
            filter += `&brand=${this.state.marca}`
        }
        axios.get(api+`/selectproduct${filter}&pag=1`).then(response => {
            this.setState({ acessorios:response.data })
        }, response =>{
            console.log(response)
        })
        event.preventDefault();
    }
    loadAcessorios = () =>{
        let filter = '?op=totalporcat&namecat=acessorios'
        if(this.state.ordem != 'Normal'){
            filter += `&order=${this.state.ordem}`
        }
        if(this.state.preco != 'Todos'){
            let preco = this.state.preco.split('-')
            let value1 = preco[0]
            let value2 = preco[1]
            filter += `&value1=${value1}&value2=${value2}`
        }
        if(this.state.marca != 'Todas'){
            filter += `&brand=${this.state.marca}`
        }
        axios.get(api+`/selectproduct${filter}&pag=1`).then(response => {
            this.setState({ acessorios:response.data })
        }, response =>{
            console.log(response)
        })
    }
    componentDidMount(){
        this.loadAcessorios()
    }
    render(){
        const { acessorios, ordemAlfa, ordemPreco, ordemMarca, ordem, preco, marca } = this.state;
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Acessórios" foto={ acessoriosBanner } link="#"/>
                    <fieldset className="config">
                        <legend>Ordenar por</legend>
                        <form onSubmit={this.handleSubmit}>
                        <div className="filtro">
                            <div className="div-select">
                                <label for="alfa">Ordem alfabética:</label>
                                <select id="alfa" value={ordem} onChange={this.handleChangeOrdem} className="select">
                                    { ordemAlfa.map( ordem =>(
                                        <option value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="preco">Preço:</label>
                                <select id="preco" value={preco} onChange={this.handleChangePreco} className="select">
                                    { ordemPreco.map( ordem =>(
                                        <option value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <label for="marca">Marca:</label>
                                <select id="marca" value={marca} onChange={this.handleChangeMarca} className="select">
                                    { ordemMarca.map( ordem =>(
                                        <option value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <Botao name="Aplicar" tipo="submit" estilo="padrao" ></Botao>
                            </div>
                        </div>
                        </form>
                    </fieldset>
                    <div className="produtos">
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
