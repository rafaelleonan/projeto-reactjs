import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Celulares from './pages/Celulares';
import Carrinho from './pages/Carrinho';
import Ajuda from './pages/Ajuda';
import Acessorios from './pages/Acessorios';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/produto/:id" component={ Produto }/>
            <Route exact path="/celulares" component={ Celulares }/>
            <Route exact path="/ajuda" component={ Ajuda }/>
            <Route exact path="/acessorios" component={ Acessorios }/>
            <Route exact path="/carrinho" component={ Carrinho }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
