import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Store from './pages/Store'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Store} />        
        </BrowserRouter>
    )
}