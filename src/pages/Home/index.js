import React, {useState,useEffect } from 'react';
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
import lupa from '../../static/icons/lupa.png'
import fecharPesquisa from '../../static/icons/fechar-pesquisa.png'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '../../components/shared/Botao';
import Button1 from '../../components/shared/Botao';

export default function  Home() {

    const [products,setProduct] = useState([]);
    const [acessorios,setAcessorios] = useState([]);
    const [pesquisado, setPesquisados] = useState([]);
    const [pags,setpages] = useState(1);
    const [pesquisa, setPesquisa] = useState('');
  
    useEffect(() => {
        loadProducts();
        loadAcessorios();

    },[])


  // useEffect(() => {
  //       axios.get(api+'/selectproduct?op=totalporcat&namecat=celulares&pag='+pags).then(response => {
  //           console.log(response)
  //          setProduct([...products,...response.data]);
  //       }, response =>{
  //           console.log(response);
  //       })
  //   },[pags])
   
    


    async function  loadProducts(){
        await axios.get(api+'/selectproduct?op=totalporcat&namecat=celulares&pag='+pags).then(response => {
            setProduct(response.data);
        }, response =>{
        })
    }
   
    async function  loadAcessorios(){
      await axios.get(api+'/selectproduct?op=totalporcat&namecat=acessorios&pag='+pags).then(response => {
            setAcessorios(response.data);
        }, response =>{
        })
    }

    async function pesquisar(event){
        event.preventDefault();
        if(pesquisa != ''){
            await axios.post(api+`/searchproducts?pag=${pags}`,{"nameproduct":pesquisa}).then(response => {
                setPesquisados(response.data)
                if(response.data[0]){
                    let pesq = document.querySelector('.resultado-pesquisa')
                    pesq.style.display = 'block'
                }
            }, response =>{
            })
        }else{
            return
        }
    }
    function fechar_pesquisa(){
        let boxResultados = document.querySelector('.resultado-pesquisa');
        let btn = document.querySelector('#abrir-pesquisa');
        let btn2 = document.querySelector('#fechar-pesquisa');
        let pes = document.querySelector('.top-search');
        pes.style.display = 'none'
        btn2.style.display = 'none'  
        btn.style.display = 'block'
        boxResultados.style.display = 'none'
    }
    function abrir_pesquisa(){
        let btn = document.querySelector('#abrir-pesquisa');
        let btn2 = document.querySelector('#fechar-pesquisa');
        let pes = document.querySelector('.top-search');
        pes.style.display = 'block' 
        btn.style.display = 'none'  
        btn2.style.display = 'block' 
    }

    function setplus(){
       alert("a");
    }
   
        return(
            <main className="default content">
                <Container maxWidth={ false } className="">
                    <div className="top-search">
                        <form onSubmit={ pesquisar }>
                            <div className="div-search">
                                <input type="search" defaultValue={ pesquisa } onChange={ (e) => setPesquisa(e.target.value) } name="search" placeholder="Pesquise algo"/>
                                <button type="submit"><img src={ lupa } alt="Lupa" id="lupa"/></button>
                            </div>
                        </form>
                        <div className="fechar-pesquisa">
                            <img src={ fecharPesquisa } alt="Fechar barra de pesquisa" id="fechar-pesquisa" onClick={ fechar_pesquisa }/>
                        </div>
                    </div>
                    <div className="abrir-pesquisa">
                        <img src={ lupa } alt="Abrir barra de pesquisa" id="abrir-pesquisa" onClick={ abrir_pesquisa }/>
                    </div>
                    <div className="resultado-pesquisa">
                        <h1>Resultados da pesquisa</h1>
                            <Grid container spacing={1}   className="grid">
                            <div className="pptotal">
                            {pesquisado.map(pesquisa =>(
                            <Grid item xs={3} key={ pesquisa.id } className="griditem">  
                                <CardInfo 
                                imagem={ pesquisa.url } 
                                titleHover={ pesquisa.nameproduct }
                                title={ pesquisa.nameproduct } 
                                subtitle={ pesquisa.value }
                                id={ pesquisa.id }
                                text={ pesquisa.description }
                                linkButton2={`/produto/${pesquisa.id}`} nameButton2="Ver mais" icon2={ ver_mais } altIcon2="Ver mais"
                               
                               />
                            </Grid>
                            ))}
                            </div>
                    </Grid>
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
                       < Button estilo="info" name="Ver Mais"/>
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
                        < Button1 estilo="info" name="Ver Mais" onClick={()=>setplus()}/>
                    </Grid>
                </Container>
            </main>
        );
    
}