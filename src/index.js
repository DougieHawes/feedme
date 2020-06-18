import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/layout/Header'
import Body from './components/layout/Body'

import './style.css'

const App = () => 
    <div className='app'>
        <Header/>
        <Body/>
    </div>

ReactDOM.render(<App/>,document.getElementById('root'))