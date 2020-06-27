import React from 'react'
import { MdSearch, MdFormatListBulleted } from 'react-icons/md'
import { Link } from 'react-router-dom'

import logo from '../../assets/ushop.png'

import './header.css'

export default function Header() {
    return (
        <>
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
                    <p>Bem vindo!</p>

                    <img src="" alt=""/>
                    <Link to="/">
                        <MdFormatListBulleted size={16} color="#000000" />
                    </Link>  
                </div>                
            </header>      

            <div className='search-container'>
                <div>
                    <h1>Todos os Produtos</h1>
                    <Link to="/" className="link-header">Produtos</Link> | 
                    <Link to="/" className="link-header"> Todos os produtos</Link>
                </div>

                <div className="input-search">
                    <input type="text" placeholder="BUSCAR: Digite o nome do produto, marca ou categoria que deseja buscar..."/>
                    
                    <Link to="/">
                        <MdSearch size={20} color="#000000" />
                    </Link> 
                </div>                
            </div>                     
        </>
    )
}