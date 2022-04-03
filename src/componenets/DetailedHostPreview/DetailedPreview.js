import React, { useState } from 'react'
import close from '../../assets/Images/close.png'
import LongTag from './LongTag';

export default function DetailedPreview({onClick, host}) {
    const [showEmail, setShowEmail] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

// TODO blurring
    return (
        <div className='preview'>
            <img className='close-in-preview' src={close} onClick={onClick} />
            <h1 className='titleInDetailedPreview'>{host.title}</h1>
            <h2 style={{marginBottom: "40px", textIndent: "2.5em"}}>{host.location}</h2>
            <div className='container-long-tag'>
                { host.short_term ? 
                    <LongTag>Short Term</LongTag> : null}
                { host.long_term ? 
                    <LongTag>Long Term</LongTag> : null}
                { host.kid_friedly ? 
                    <LongTag>Kids-friendly</LongTag> : null}
                { host.pet_friendly ? 
                    <LongTag>Pets-friendly</LongTag> : null}
            </div>
            <h1 style={{textIndent: "2.5em", marginTop: "30px"}} className='detailsInDetailedPreview'>
                Details
            </h1>
            <div className='descriptionInDetailedPreview' >{host.description}</div>
            <div className='infoButtonInDetailedPreview' onClick={() => setShowEmail(!showEmail)}>
                {showEmail ? host.email : 'Email'}
            </div>
            <div className='infoButtonInDetailedPreview' onClick={() => setShowPhone(!showPhone)}>
                {showPhone ? host.phone : 'Phone'}
            </div>
        </div>
    );
}