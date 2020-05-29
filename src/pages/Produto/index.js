import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import Container from '@material-ui/core/Container';
import api from '../../services/api';
import axios from 'axios'

export default class Produto extends Component{
    state = {
        product:{}
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        let name = this.props.match.params.name;
        console.log(name);
        console.log(id);
    
        this.loadProduto(id);
            
        
    
    }
    loadProduto = (id) => {
    
        axios.get(api+`/selectproduct?op=totaldescription&id=${id}`).then(response => {
            if(response.data.length==0){

                window.location.href="/";
                
            }else{
                this.setState({ product:response.data[0]})
            }
            

        }, response =>{
            console.log(response)
        })
    }
    render(){
    
        const { product,error } = this.state;
      
            return(
                <main className="default">
                    <Container maxWidth={ false }>
                        <div className="produto">
                            <div className="inline-foto">
                                <img src={ product.url } alt="Foto"/>
                            </div>
                            <div className="inline-desc">
                                <div className="titulo">
                                    <h3> { product.nameproduct } </h3>
                                </div>
                                <div className="des">
                                    <p> { product.description }</p>
                                </div>
                                <div className="preco">
                                    <p>R$ { product.value }</p>
                                </div>
                                {/* <div className="compra">
                                    <button type="button">Adicionar ao carrinho</button>
                                    <button type="button">Comprar</button>
                                </div> */}
                            </div>
                        </div>
                        <fieldset className="ficha-tecnica">
                            <legend>Ficha técnica</legend>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Modelo</td><td>{ product.model }</td>
                                    </tr>
                                    <tr>
                                        <td>Resolução</td><td>{ product.resolution }</td>
                                    </tr>
                                    <tr>
                                        <td>Dimensões</td><td>{ product.dimension }</td>
                                    </tr>
                                    <tr>
                                        <td>Cor</td><td>{ product.color }</td>
                                    </tr>
                                    <tr>
                                        <td>Conectividade</td><td>{ product.connectivity }</td>
                                    </tr>
                                    <tr>
                                        <td>Processador</td><td>{ product.processor }</td>
                                    </tr>
                                    <tr>
                                        <td>Memória</td><td>{ product.memory }</td>
                                    </tr>
                                    <tr>
                                        <td>Chip</td><td>{ product.chip }</td>
                                    </tr>
                                    <tr>
                                        <td>Peso</td><td>{ product.weight }</td>
                                    </tr>
                                    <tr>
                                        <td>Marca</td><td>{ product.brand }</td>
                                    </tr>
                                    <tr>
                                        <td>Camera</td><td>{ product.camera }</td>
                                    </tr>
                                    <tr>
                                        <td>Frequência</td><td>{ product.frequency }</td>
                                    </tr>
                                    <tr>
                                        <td>Bateria</td><td>{ product.drums }</td>
                                    </tr>
                                    <tr>
                                        <td>Polegadas</td><td>{ product.inches }</td>
                                    </tr>
                                    <tr>
                                        <td>Conexões</td><td>{ product.connections }</td>
                                    </tr>
                                    <tr>
                                        <td>Sistema operacional</td><td>{ product.operationalsystem }</td>
                                    </tr>
                                    <tr>
                                        <td>bluetooth</td><td>{ product.bluetooth }</td>
                                    </tr>
                                    <tr>
                                        <td>Tensão de alimentação</td><td>{ product.powervoltage }</td>
                                    </tr>
                                    <tr>
                                        <td>Wi-fi</td><td>{ product.wifi }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </fieldset>
                    </Container>
                </main>
            );
        
        }
       
}
