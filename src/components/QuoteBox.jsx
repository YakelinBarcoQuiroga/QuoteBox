import React, { useState } from 'react';
import quotes from './quotes.json'
import '../App.css';
import Phrasebutton from './Phrasebutton';
import colors from './colors.json'

const QuoteBox = () => {

    const ChangePhrase = () =>{
        let counter = Math.floor(Math.random() * (quotes.length));
        SetCounter(counter);
    }

    const random = Math.floor(Math.random() * (quotes.length));
    const [counter, SetCounter] = useState(random);

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex].hex;

    document.body.style = `background: ${color}`;

    return (
        <div className='main-container'>
            <div className='container-card'>
                <div className='card__phrase'>
                    <i class="fa-solid fa-quote-left" style={{color: color}}></i>
                    <p className='phrase' style={{color: color}}>{quotes[counter].quote}</p>
                </div>
                <Phrasebutton ChangePhrase={ChangePhrase} counter={counter} color={color}/>
            </div>
        </div>
    );
};

export default QuoteBox;