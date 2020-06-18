import React, { useState } from 'react'

import { Search } from '../utils/Search'

import './style.css'

const Body = () => {
    const [showEatout, toggleEatout]=useState(false)
    const [showFood, toggleFood]=useState(false)
    const [showDessert, toggleDessert]=useState(false)
    const [showCocktail, toggleCocktail]=useState(false)

    return (
        <div className='body'>
            <div className='body-options'>
                <p onClick={() => {
                    toggleEatout(!showEatout)
                    if (showFood) {
                        toggleFood(!showFood)
                    }
                    }
                    } className='body-option'>eat-out</p>
                <p onClick={() => {
                    if (showEatout){toggleEatout(!showEatout)}
                    toggleFood(!showFood)
                    }} className='body-option'>food</p>
                <p onClick={() => toggleDessert(!showDessert)} className='body-option'>dessert</p>
                <p onClick={() => toggleCocktail(!showCocktail)} className='body-option'>cocktail</p>
            </div>
            <div className='body-items'>
                {showEatout && <Search title='eatout' desc='search restaurants'/>}
                {showFood && <Search title='food' desc='search food'/>}
                {showDessert && <Search title='dessert' desc='search dessert'/>}
                {showCocktail && <Search title='cocktail' desc='search food'/>}
            </div>
        </div>
    )
}

export default Body