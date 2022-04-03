import React from 'react'
import close from '../../assets/Images/close.png'

export default function DetailedPreview({onClick, host}) {
// TODO blurring
    return (
        <div className='preview'>
            <img className='close-in-preview' src={close} onClick={onClick} />
            <h1>{host.children.title}</h1>
            <h2>{host.children.location}</h2>
        </div>
    );
}