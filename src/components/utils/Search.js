import React from 'react'

// import { Zoom } from 'react-reveal'

import './style.css'

export const Search=({title, desc})=>
        <div className='search' id={title}>
            <div className='search-header'>
                <h2 className='search-title'>{title}</h2>
                <p className='search-desc'>{desc}</p>
            </div>
        </div>