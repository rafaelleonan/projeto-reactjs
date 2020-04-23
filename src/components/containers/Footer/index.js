import React from 'react';
import './style.css';

const Footer = () =>(
    <footer>
        <div id="info-footer">
            <div className="block-div">
                <h2>Contatos</h2>
                <ul className="list-footer">
                    <li>Telefone - (##) # ####-####</li>
                    <li>Telefone - (##) # ####-####</li>
                    <li>Email - emailfantasia@gmail.com</li>
                    <li>Telefone - (##) # ####-####</li>
                </ul>
            </div>
            <div className="block-div">
                <h2>Atendimento ao cliente</h2>
                <ul className="list-footer">
                    <li><a href="#"> Ajuda</a></li>
                    <li><a href="#"> Sobre a empresa</a></li>
                    <li><a href="#"> Fale conosco</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            Copyright © 2020
        </div>
    </footer>
);

export default Footer;