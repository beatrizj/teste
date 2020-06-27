import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
