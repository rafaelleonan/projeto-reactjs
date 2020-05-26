import React, { Component} from 'react';
import './style.css';
import logo from '../../../static/icons/logo.png';
import lupa from '../../../static/icons/lupa.png';
// import script from '../Header/scripts/css';
import { Link } from 'react-router-dom'; 


export default class Header extends Component{

    render(){
      

        let show = true;
         
        window.onresize = scroll;

        function scroll(){
        if(window.innerWidth>748){
            const menuSection = document.querySelector("header");
            menuSection.classList.toggle("on",false);
        }
        
        }
       
        return(
          
            <div className="content">
                <header className="header" >
                    <Link to="/" className="a-logo">
                        <img src={ logo } className="logo" alt="Logo"/>
                    </Link>
                    <div className="div-search">
                        <input type="search" name="search" placeholder="Pesquise algo"/>
                        <button type=""><img src={ lupa } alt="Lupa" id="lupa"/></button>
                    </div>
                    <div className="div-list">
                        <ul className="list-options">
                            <li><Link to="/celulares">Celulares</Link></li>
                            <li><Link to="/acessorios">Acessórios</Link></li>
                        </ul>
                    </div>
                
                    <div className="menu-toggle" onClick={()=>{
                    document.body.style.overflow = show ?"hidden":"initial";

                    const menuSection = document.querySelector("header");
                    
                    menuSection.classList.toggle("on",show);
                   
                    show =!show;

                    }}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                </header>
            </div>
          
        );
      
    }

}