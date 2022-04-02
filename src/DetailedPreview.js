import React from 'react'
import close from './assets/Images/close.png'

export default function DetailedPreview({onClick, host}) {

    return (
        <div className='preview'>
            <img className='close-in-preview' src={close} onClick={onClick} />
        </div>
    );
}