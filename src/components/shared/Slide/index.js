import React from 'react'
import './style.css';
import slide from '../../../static/imagens/slide2.jpg'

const Silde = () => {
    return(
        <div className="slide">
            <img src={ slide } alt="Slide"/>
            <div className="conteudo-slide">
                <h1>Titulo Slide</h1>
                <p>
                    Texto Slide
                </p>
            </div>
        </div>
    );
}

export default Silde;