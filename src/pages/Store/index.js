import  React  from 'react'
import { MdClose } from 'react-icons/md'

import shirt from '../../assets/camisa1.png'

import './styles.css'

export default function Store() {

    return (
        <div className='cart-container'>                  

            <div className="body-container"> 

                <div className="sold-container">
                    <h1>Vendidos pela UShop</h1>
                    <p>Você adicionou 1 produto à sua sacola.</p>

                    <div className="items">
                        <div className="item">
                            <img src={shirt} alt="Camisa" />

                            <div className="item-info">
                            <strong>Camisa Element</strong>
                                <p>Vendido e entregue por <a href="/">UShop</a></p>

                                <div className="price">
                                    <p>De: <strike>R$99,00</strike> </p>
                                    <p>Por: R$60,00</p>
                                </div>                            
                            </div>
                                

                            <div className="item-qty">
                                <p>Quantidade: 
                                <select name="select">
                                    <option value="1" selected>1</option> 
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <MdClose size={10} color="#000000" />                          
                                </p>                                  
                            </div>                       
                        </div>


                        <div className="item">
                            <img src={shirt} alt="Camisa" />

                            <div className="item-info">
                            <strong>Camisa Element</strong>
                                <p>Vendido e entregue por <a href="/">UShop</a></p>

                                <div className="price">
                                    <p>De: <strike>R$99,00</strike> </p>
                                    <p>Por: R$60,00</p>
                                </div> 
                            </div>
                                

                            <div className="item-qty">
                                <p>Quantidade: 
                                <select name="select">
                                    <option value="1">1</option> 
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <MdClose size={10} color="#000000" />
                                </p>     
                            </div>                       
                        </div>
                    </div>

                    <h1>Marketplace</h1>
                    <p>Você adicionou 1 produto à sua sacola.</p>

                    <div className="items">
                        <div className="item">
                            <img src={shirt} alt="Camisa" />

                            <div className="item-info">
                                <strong>Camisa Element</strong>
                                <p>Vendido e entregue por <a href="/">UShop</a></p>

                                <div className="price">
                                    <p>De: <strike>R$99,00</strike> </p>
                                    <p>Por: R$60,00</p>
                                </div> 
                            </div>
                                

                            <div className="item-qty">
                                <p>Quantidade: 
                                <select name="select">
                                    <option value="1">1</option> 
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <MdClose size={10} color="#000000" />
                                </p>     
                            </div>                       
                        </div>

                        <div className="item">
                            <img src={shirt} alt="Camisa" />

                            <div className="item-info">
                                <strong>Camisa Element</strong>
                                <p>Vendido e entregue por <a href="/">UShop</a></p>

                                <div className="price">
                                    <p>De: <strike>R$99,00</strike> </p>
                                    <p>Por: R$60,00</p>
                                </div> 
                            </div>
                                

                            <div className="item-qty">
                                <p>Quantidade: 
                                <select name="select">
                                    <option value="1">1</option> 
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <MdClose size={10} color="#000000" />
                                </p>     
                            </div>                       
                        </div>
                    </div>

                    
                </div>

                <div className="resumo-container">
                        <h1>RESUMO DO PEDIDO:</h1>

                        <div className="total-produtos">
                            <p>Total em produtos:</p>
                            <p>R$345,00</p>
                        </div>                    

                        <p>5 produtos adicionados</p>
                        <p>Total: R$594,00</p>

                        
                        <button type="button" className="finalizar-btn">Finalizar Compra</button>
                        <button type="button" className="escolher-btn">Escolher mais produtos</button>
                    </div>

                {/* <ul>
                    {items.map(data => (
                        <li key={data.id} >
                            <img src={data.imagem} alt={data.nome} />
                            <strong>{data.nome}</strong>
                            <p>Vendido e entregue por <a href="/">{data.marketplace.nome}</a></p>

                            <p>De: <strike>{data.valor_unitario}</strike> </p>
                            <p>Por: {data.valor_unitario_promocional}</p>

                            <p>Quantidade:</p>
                            <select name="select">
                                <option value="1" selected>1</option> 
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>                            
                        </li>
                    ))}
                </ul>                 */}
            </div>

            
        </div>
    )
}