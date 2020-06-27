import  React  from 'react'
import { MdSearch, MdFormatListBulleted } from 'react-icons/md'
import { Link } from 'react-router-dom'

import logo from '../../assets/ushop.png'
import logoFooter from '../../assets/ushop-footer.png'
import socialNetwork from '../../assets/footer-1.png'
import cards from '../../assets/footer-2.png'
import shirt from '../../assets/camisa1.png'

import './styles.css'

export default function Store() {
    //const [items, setItems] = useState([])

    return (
        <div className='cart-container'>
            <header>
                <img src={logo} alt='UShop logo' />

                <div className="menu-header">
                    <ul>
                        <li><a href="/">Masculino</a></li>
                        <li><a href="/">Feminino</a></li>
                        <li><a href="/">Infantil</a></li>
                        <li><a href="/">Acessórios</a></li>
                        <li><a href="/">Casa</a></li>
                        <li><a href="/">Esporte</a></li>
                    </ul>
                </div>                   

                <div className="profile">
                    <p>Bem vinda!</p>
                    <p>Fulano</p> 

                    <img src="" alt=""/> 
                    <Link to="/">
                        <MdFormatListBulleted size={16} color="#000000" />
                    </Link>
                    
                </div>                
            </header>      

            <div className='search-container'>
                <div>
                    <h1>Todos os produtos</h1>
                    <Link to="/" className="link-header">Produtos</Link>
                    <Link to="/" className="link-header">Todos os Produtos</Link>
                </div>

                <div className="input-search">
                    <input type="text" placeholder="BUSCAR: Digite o nome do produto, marca ou categoria que deseja buscar..."/>
                    
                    <Link to="/">
                        <MdSearch size={20} color="#000000" />
                    </Link>                    
                </div>                
            </div>       

            <div className="body-container">
                <div className="sold-container">
                    <h1>Vendidos pela UShop</h1>
                    <p>Você adicionou 1 produto à sua sacola.</p>

                    <h1>Marketplace</h1>
                    <p>Você adicionou 1 produto à sua sacola.</p>
                </div>

                
                    <div id="marketplace">
                            <img src={shirt} alt="Camisa" />
                            <strong>Camisa Element</strong>
                            <p>Vendido e entregue por <a href="/">UShop</a></p>

                            <p>De: <strike>R$99,00</strike> </p>
                            <p>Por: R$60,00</p>

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

                <div className="resumo-container">
                    <h1>RESUMO DO PEDIDO:</h1>

                    <div className="total-produtos">
                        <p>Total em produtos:</p>
                        <p>R$345,00</p>
                    </div>                    

                    <p>5 produtos adicionados</p>
                    <p>Total: R$594,00</p>

                    <button className="finalizar-btn">Finalizar Compra</button>
                    <button className="escolher-btn">Escolher mais produtos</button>
                </div>

                {/* <ul>
                    {items.map(data => (
                        <li key={data.id} >
                            <strong>{data.title}</strong>
                            <p>Vendido e entregue por: {data.marketplace.nome}</p>

                            <p>De: {data.valor_unitario}</p>
                            <p>Por: {data.valor_unitario_promocional}</p>

                            <button onClick={() => handleDeleteData(data.id)} type="button">
                                <FiTrash2 size={20} color="a8a8b3" />
                            </button>
                        </li>
                    ))}
                </ul> */}
            </div>

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
        </div>
    )
}