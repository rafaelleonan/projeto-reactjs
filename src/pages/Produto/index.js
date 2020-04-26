import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import foto from '../../static/imagens/foto.jpg';
import Container from '@material-ui/core/Container';

export default class Produto extends Component{
    render(){
        return(
            <main className="default">
                <Container maxWidth={ false }>
                    <div className="produto">
                        <div className="inline-foto">
                            <img src={ foto } alt="Foto"/>
                        </div>
                        <div className="inline-desc">
                            <div className="titulo">
                                <h3> Nome produto </h3>
                            </div>
                            <div className="des">
                                <p> Resistente à água, conjunto de câmeras completamente novo, melhor desempenho e bateria com maior duração, alto-falantes estéreo e tela com mais brilho e cores. Este é o iPhone 7 Plus da Apple</p>
                            </div>
                            <div className="preco">
                                <p> R$ 1.200,00</p>
                            </div>
                            <div className="compra">
                                <button type="button">Adicionar ao carrinho</button>
                                <button type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <fieldset className="ficha-tecnica">
                        <legend>Ficha técnica</legend>
                        <table className="table" BORDER RULES="rows">
                            <tr>
                                <td>Modelo</td><td>A1784 - MNQN2BZ</td>
                            </tr>
                            <tr>
                                <td>Dimensões</td><td>iPhone 158.2 x 77.9 x 7.3 mm - Embalagem 9.8 x 5.0 x 17.3cm</td>
                            </tr>
                            <tr>
                                <td>Cor</td><td>Prata.</td>
                            </tr>
                            <tr>
                                <td>Conectividade</td><td>NFC (Apple Pay only) - GPS assistido e GLONASS</td>
                            </tr>
                            <tr>
                                <td>Processador</td><td>Apple A10 Fusion - Quad-core 2.23 GHz - GPU Six-core</td>
                            </tr>
                            <tr>
                                <td>Memória</td><td>Interna 32GB - 3GB RAM</td>
                            </tr>
                            <tr>
                                <td>Chip</td><td>Nano-SIM</td>
                            </tr>
                            <tr>
                                <td>Camera</td><td>Dual 12MP (Grande-angular abertura /1.8) (Teleobjetiva abertura /2.8)- Zoom digital até 5x - Sen</td>
                            </tr>

                        </table>
                    </fieldset>
                </Container>
            </main>
        );
    }
}
