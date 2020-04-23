import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import foto from '../../static/imagens/foto.jpg';
import Container from '@material-ui/core/Container';
import Img from '../../components/shared/Imgs';

export default class Produto extends Component{
    render(){
        return(
            <main className="default">
                <Container maxWidth={ false }>
                    <div className="produto">
                        <Img image={ foto } alt="Foto" />
                    </div>
                </Container>
            </main>
        );
    }
}
