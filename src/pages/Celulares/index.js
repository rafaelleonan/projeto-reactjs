import React, { Component } from 'react';
import './style.css';
import '../../style.css';
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
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            ordemAlfa:[{ value:'Normal', opcao:'Normal' },{ value:'CRESC', opcao:'Crescente' }, { value:'DESC', opcao:'Decrescente' }],
            ordemPreco:[{ value:'Todos', opcao:'Todos' },{ value:'1-600', opcao:'Até R$ 600' } , { value:'601-700', opcao:'R$ 601 - R$ 700' }, { value:'701-800', opcao:'R$ 701 - R$ 800' }, { value:'801-900', opcao:'R$ 901 - R$ 1000' }],
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
        let filter = '?op=totalporcat&namecat=celulares'
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
            this.setState({ products:response.data })
        }, response =>{
            console.log(response)
        })
        event.preventDefault();
      }
    loadProducts = () =>{
        let filter = '?op=totalporcat&namecat=celulares'
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
            this.setState({ products:response.data })
        }, response =>{
            console.log(response)
        })
    }
    componentDidMount(){
        this.loadProducts()
    }

    render(){
        const { products, ordemAlfa, ordemPreco, ordemMarca, ordem, preco, marca } = this.state;
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Celulares" foto={ banner } link="#"/>
                    <fieldset className="config">
                        <legend>Ordenar por</legend>
                        <form onSubmit={this.handleSubmit}>
                        <div className="filtro">
                            <div className="div-select">
                                <label htmlFor="alfa">Ordem alfabética:</label>
                                <select id="alfa" value={ordem} onChange={this.handleChangeOrdem} className="select">
                                    { ordemAlfa.map( ordem =>(
                                        <option key={ ordem.value } value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <label htmlFor="preco">Preço:</label>
                                <select id="preco" value={preco} onChange={this.handleChangePreco} className="select">
                                    { ordemPreco.map( ordem =>(
                                        <option key={ ordem.value } value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <label htmlFor="marca">Marca:</label>
                                <select id="marca" value={marca} onChange={this.handleChangeMarca} className="select">
                                    { ordemMarca.map( ordem =>(
                                        <option key={ ordem.value } value={ ordem.value }>{ ordem.opcao }</option>
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
                        {products.map(product =>(
                            <Grid item xs={3} key={ product.id }>
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