import React, { useState,useEffect } from 'react';
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


export default function Acessorios() {

    const [acessorios,setAcessorios] = useState([]);
    const [ordemAlfa,setOrdemAlfa] = useState([{ value:'Normal', opcao:'Normal' },{ value:'ASC', opcao:'Crescente' }, { value:'DESC', opcao:'Decrescente' }]);
    const [ordemPreco,setOrdemPreco] = useState([{ value:'Todos', opcao:'Todos' },{ value:'1-50', opcao:'Até R$ 50' } , { value:'101-150', opcao:'R$ 101 - R$ 150' }, { value:'151-200', opcao:'R$ 151 - R$ 200' }, { value:'200-250', opcao:'R$ 200 - R$ 250' }]);
    const [ordemMarca,setordemMarca] = useState([{ value:'Todas', opcao:'Todas' },{ value:'Apple', opcao:'Apple' }, { value:'LG', opcao:'LG' } , { value:'Motorola', opcao:'Motorola' } , { value:'Samsung', opcao:'Samsung' } , { value: 'Xiaomi', opcao: 'Xiaomi' }]);
    const [ordem,setOrdem] = useState("Normal");
    const [preco,setPreco] = useState("Todos");
    const [marca,setMarca] = useState("Todas");
    const[pags,setPags] = useState(1);
    const[pagsfiltro,setPagsfiltro] = useState(1);
    const[pagslimit,setpagslimit] = useState(false);
    const[porfiltroboolean,setPorfiltroboolean] = useState(false);

       
    useEffect(() => {

        loadAcessorios();
            
      },[])
      useEffect(() => {  ///quando houver alteraco em pags dispara useEffect
            
        loadAcessorios();
    
        },[pags])

        useEffect(() => {  
            if((pagsfiltro!==1) & (porfiltroboolean==true)){
                handleSubmit1();
            }

      },[pagsfiltro]);

    

    function handleChangeOrdem(value) {
      
        setOrdem(value);
    }
    function handleChangePreco(value){
     
        setPreco(value);
    }
    function handleChangeMarca(value) {
      
        setMarca(value);
    }

    function setPlusPag(){
        console.log(pags);

     if(pagslimit==true){  //para nao retornar mais registros
        return;
     }else if(porfiltroboolean==false){
        setPags((pags+1));
     }else if(porfiltroboolean==true){

         setPagsfiltro(pagsfiltro+1);
     }
         
  }

    async function handleSubmit1(){
        let filter = '?op=totalporcat&namecat=acessorios'
        if(ordem != 'Normal'){
            filter += `&order=${ordem}`
        }
        if(preco != 'Todos'){
            let prec = preco.split('-')
            let value1 = prec[0]
            let value2 = prec[1]
            filter += `&value1=${value1}&value2=${value2}`
        }
        if(marca != 'Todas'){
            filter += `&brand=${marca}`
        }
        await axios.get(api+`/selectproduct${filter}&pag=${pagsfiltro}`).then(response => {
           
            setAcessorios([...acessorios,...response.data]);

        }, response =>{
            console.log(response)
        })
      }

    async function handleSubmit(event) {
        event.preventDefault();
        setpagslimit(false);
        setPagsfiltro(1);
       
        let filter = '?op=totalporcat&namecat=acessorios'
        if(ordem != 'Normal'){
            filter += `&order=${ordem}`
        }
        if(preco != 'Todos'){
            let prec = preco.split('-')
            let value1 = prec[0]
            let value2 = prec[1]
            filter += `&value1=${value1}&value2=${value2}`
        }
        if(marca != 'Todas'){
            filter += `&brand=${marca}`
        }
        await axios.get(api+`/selectproduct${filter}&pag=1`).then(response => {
            setAcessorios(response.data);

        }, response =>{
            console.log(response)
        })
       setPorfiltroboolean(true);  //agora a pesquisa esta sendo por filtro
      }
    
    
      async function loadAcessorios() {
        let filter = '?op=totalporcat&namecat=acessorios'
        if(ordem != 'Normal'){
            filter += `&order=${ordem}`
        }
        if(preco != 'Todos'){
            let prec = preco.split('-')
            let value1 = prec[0]
            let value2 = prec[1]
            filter += `&value1=${value1}&value2=${value2}`
        }
        if(marca != 'Todas'){
            filter += `&brand=${marca}`
        }
        await axios.get(api+`/selectproduct${filter}&pag=${pags}`).then(response => {

            if(response.data.length==0){
                setpagslimit(true);
                return;
            }else{
                setAcessorios([...acessorios,...response.data]);
            }
         
        }, response =>{
            console.log(response)
        })
    }
   
    
        return(
            <main className="default content">
                <Container maxWidth={ false }>
                    <Banner title="Acessórios" foto={ acessoriosBanner } link="#"/>
                    <fieldset className="config">
                        <legend>Ordenar por</legend>
                        <form onSubmit={e=>{handleSubmit(e)}}>
                        <div className="filtro">
                            <div className="div-select">
                                <label htmlFor="alfa">Ordem alfabética:</label>
                                <select id="alfa" value={ordem} onChange={e=>{handleChangeOrdem(e.target.value)}} className="select">
                                    { ordemAlfa.map( ordem =>(
                                        <option key={ordem.value} value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <label htmlFor="preco">Preço:</label>
                                <select id="preco" value={preco} onChange={e=>{handleChangePreco(e.target.value)}}  className="select">
                                    { ordemPreco.map( ordem =>(
                                        <option key={ordem.value} value={ ordem.value }>{ ordem.opcao }</option>
                                    )) }
                                </select>
                            </div>
                            <div className="div-select">
                                <label htmlFor="marca">Marca:</label>
                                <select id="marca" value={marca} onChange={e=>{handleChangeMarca(e.target.value)}} className="select">
                                    { ordemMarca.map( ordem =>(
                                        <option key={ordem.value} value={ ordem.value }>{ ordem.opcao }</option>
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
                                linkButton2={`/produto/${acessorio.id}`} nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Carrinho"
                                />
                            </Grid>
                        ))}
                       </div>
                       <button className="info" onClick={()=>{setPlusPag()}}>
                         Ver Mais
                        </button>
                    </Grid>
                    </div>
                </Container>
            </main>
        );
    
}
