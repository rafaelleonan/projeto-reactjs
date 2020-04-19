import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import Container from '@material-ui/core/Container';

export default class Produto extends Component{
    render(){
        return(
            <main className="default">
                <Container maxWidth={ false }>
                    <h1>Produtos</h1>
                </Container>
            </main>
        );
    }
}
