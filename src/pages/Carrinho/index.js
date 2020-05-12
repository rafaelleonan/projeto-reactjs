import React, { Component } from 'react';
import './style.css'
import '../../style.css';
import Container from '@material-ui/core/Container';
import add from '../../static/icons/adicionar.png'
import remove from '../../static/icons/remover.png'
import Botao from '../../components/shared/Botao';


export default class Carrinho extends Component{
  criaCarrinho(){
    const result = document.querySelector("tbody")
    let i = 0;
    if (localStorage.hasOwnProperty("Car")) {
      JSON.parse(localStorage.getItem("Car")).forEach(produto => {
        result.insertAdjacentHTML('beforeend', `<tr class="tr"><td>${produto.titulo}</td><td class="preco">${produto.subtitulo}</td><td class="qnt">${produto.qnt}</td><td class="totalUnidade"></td><td>${produto.id}</td><td><img src=${ remove } alt="Remover" class="remove" /></td><td><img src=${ add } alt="Adicionar" class="add"/></td></tr>`)
        i++;
      })    
    }else{
      alert(JSON.parse(localStorage.getItem("Car")))
    }
  }
  remove(){
    let produto = new Array()
    if (localStorage.hasOwnProperty("Car")) {
      produto = JSON.parse(localStorage.getItem("Car"))
      let tr = document.querySelectorAll('.tr');
      let remove = document.querySelectorAll(".remove");
      for(let i = 0; i < tr.length; i++){
          remove[i].addEventListener("click", function(){
          if(produto[i].qnt > 1){
            produto[i].qnt -= 1
            localStorage.setItem("Car", JSON.stringify(produto))
            window.location.reload()
          }else{
            produto.splice(i,1)
            localStorage.setItem("Car", JSON.stringify(produto))
            window.location.reload()
          }
        })
      }
    }
  }
  add(){
    let produto = new Array()
    if (localStorage.hasOwnProperty("Car")) {
      produto = JSON.parse(localStorage.getItem("Car"))
      let tr = document.querySelectorAll('.tr');
      let add = document.querySelectorAll(".add");
      for(let i = 0; i < tr.length; i++){
        add[i].addEventListener("click", function(){
          produto[i].qnt += 1
          localStorage.setItem("Car", JSON.stringify(produto))
          window.location.reload()
        })
      }
    }
  }
  totalProdutos(){
    if(localStorage.hasOwnProperty("Car")){
      let tr = document.querySelectorAll('.tr');
      let qnt = document.querySelectorAll('.qnt');
      let qntTotal = document.querySelector('#totalProdutos');
      let total = 0
      for(var i = 0; i < tr.length; i++){
        total += Number(qnt[i].textContent)
      }
      qntTotal.textContent = total
    }
  }
  valorTotal(){
    if(localStorage.hasOwnProperty("Car")){
      let tr = document.querySelectorAll('.tr');
      let preco = document.querySelectorAll('.preco');
      let qnt = document.querySelectorAll('.qnt');
      let qntTotal = document.querySelector('#precoTotal');
      let total = 0
      for(var i = 0; i < tr.length; i++){
        total += (Number(preco[i].textContent.replace(",", "."))*Number(qnt[i].textContent))
      }
      qntTotal.textContent = total
    }
  }
  valorTotalProduto(){
    if(localStorage.hasOwnProperty("Car")){
      let tr = document.querySelectorAll('.tr');
      let preco = document.querySelectorAll('.preco');
      let qnt = document.querySelectorAll('.qnt');
      let precoTotal = document.querySelectorAll('.totalUnidade')
      for(var i = 0; i < tr.length; i++){
        precoTotal[i].textContent = Number(preco[i].textContent.replace(",", "."))*Number(qnt[i].textContent)
      }
    }
  }
  componentDidMount(){
    this.criaCarrinho()
    this.totalProdutos()
    this.valorTotal()
    this.valorTotalProduto()
    this.remove()
    this.add()
  }
  componentWillUpdate(){
    this.totalProdutos()
    this.valorTotal()
    this.valorTotalProduto()
  }
  render(){
    return(
      <Container maxWidth={ false } className="default">
        <fieldset className="carrinho">
          <table className="table">
            <thead>
              <tr>
                <td>Preço total: R$<b id="precoTotal"></b></td><td>Total produtos:<b id="totalProdutos"></b></td>
              </tr>
              <tr>
                <th>Produto</th><th>Preço R$</th><th>Quantidade</th><th>Total produto R$</th><th>ID</th><th>Remover </th><th>Adicionar</th>
              </tr>
            </thead>
            <tbody className="tbody">
            </tbody>
          </table>
          <div className="btn-carrinho">
            <Botao name="Finalizar compra" tipo="submit" estilo="padrao" ></Botao>
          </div>
        </fieldset>
      </Container>
    );
  }
}