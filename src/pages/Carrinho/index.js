import React, { Component } from 'react';
import './style.css'
import '../../style.css';
import Container from '@material-ui/core/Container';

export default class Carrinho extends Component{
  render(){
    return(
      <Container maxWidth={ false }>
        <fieldset className="carrinho">
          <legend>Meu carrinho</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Produto</th><th>Preço R$</th><th>Quantidade</th><th>Marca</th><th>Remover</th><th>Mais 1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Galaxy S5</td><td>10</td><td>1</td><td>Samsung</td><td>icone</td><td>icone</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </Container>
    );
  }
}