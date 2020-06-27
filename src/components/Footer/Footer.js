import React from 'react'

import logoFooter from '../../assets/ushop-footer.png'
import socialNetwork from '../../assets/footer-1.png'
import cards from '../../assets/footer-2.png'

import './footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
                <footer>
                    <div className="footer-1">
                        <img src={logoFooter} alt='UShop logo' />

                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

                        <img src={socialNetwork} alt="Redes Sociais"/>
                    </div>
                    

                    <div className="menu-footer">
                        <h1>Menu:</h1>
                        <ul>
                            <li><a href="/">Masculino</a></li>
                            <li><a href="/">Feminino</a></li>
                            <li><a href="/">Infantil</a></li>
                            <li><a href="/">Acessórios</a></li>
                            <li><a href="/">Casa</a></li>
                            <li><a href="/">Esporte</a></li>
                        </ul> 
                    </div>

                    <div className="footer-2">
                        <h1>Formas de pagamento:</h1>
                        <img src={cards} alt="Formas de Pagamento"/>

                        <h1>Atendimento:</h1>
                        <p>(24) 3303-3303 | (24) 99909-9909</p>
                        <p>Ou mande um e-mail para: sac@fococomunicao.com.br</p>
                    </div>                         
                </footer>
            </div>
    )
}