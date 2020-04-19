import React from 'react';
import './style.css';

const Footer = () =>(
    <footer>
        <div id="info-footer">
            <div className="block-div">
                <h2>Contatos</h2>
                <ul className="list-footer">
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </div>
            <div className="block-div">
                <h2>Atendimento ao cliente</h2>
                <ul className="list-footer">
                    <li><a href="#"> Atendimento ao client</a></li>
                    <li><a href="#"> Atendimento ao client</a></li>
                    <li><a href="#"> Atendimento ao client</a></li>
                    <li><a href="#"> Atendimento ao client</a></li>
                </ul>
            </div>
            <div className="block-div">
                <h2>Nossa empresa</h2>
                <ul className="list-footer">
                    <li><a href="#">Nossa empresa</a></li>
                    <li><a href="#">Nossa empresa</a></li>
                    <li><a href="#">Nossa empresa</a></li>
                    <li><a href="#">Nossa empresa</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            Copyright © 2020
        </div>
    </footer>
);

export default Footer;