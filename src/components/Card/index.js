import React from 'react';
import './Card.css';

function Card({title,img,body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={img} alt='' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h1>{title}</h1>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
