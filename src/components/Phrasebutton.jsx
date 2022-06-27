import React from 'react';
import quotes from './quotes.json'
import '../App.css';

const Phrasebutton = ({ChangePhrase, counter, color}) => {
    return (
        <div className='card__author'>
            <p className='author' style={{color: color}}>{quotes[counter].author}</p>
            <button onClick={ChangePhrase} style={{background: color}}><i class="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Phrasebutton;