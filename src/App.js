import React from 'react';
import Header from '../src/components/containers/Header';
import Footer from '../src/components/containers/Footer';
import Routes from './routes';
import './style.css';


const App = () => (
  <div className="App">
      <Header 
        link1="/acessorios" item1="Acessórios"
        link2="/produto/id" item2="Celulares"
        link3="/marcas" item3="Marcas"
      />
      <Routes />
      <Footer />
  </div>
);

export default App;
