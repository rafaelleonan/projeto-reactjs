import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Categoria from './pages/Categoria';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/produto/:id" component={ Produto }/>
            <Route exact path="/categoria" component={ Categoria }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
