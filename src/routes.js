import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Celulares from './pages/Celulares';
import Marcas from './pages/Marcas';
import Acessorios from './pages/Acessorios';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/produto/:id" component={ Produto }/>
            <Route exact path="/celulares" component={ Celulares }/>
            <Route exact path="/marcas" component={ Marcas }/>
            <Route exact path="/acessorios" component={ Acessorios }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
