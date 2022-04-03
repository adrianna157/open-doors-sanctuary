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
            <h1 className='titleInDetailedPreview'>{host.children.title}</h1>
            <h2 style={{marginBottom: "40px", textIndent: "2.5em"}}>{host.children.location}</h2>
            <div className='container-long-tag'>
                { host.children.short_term ? <LongTag>Short Term</LongTag> : null}
                { host.children.long_term ? <LongTag>Long Term</LongTag> : null}
                { host.children.kid_friedly ? <LongTag>Kids-friendly</LongTag> : null}
                { host.children.pet_friendly ? <LongTag>Pets-friendly</LongTag> : null}
            </div>
            <h1 style={{textIndent: "2.5em", marginTop: "30px"}} className='detailsInDetailedPreview'>
                Details
            </h1>
            <div className='descriptionInDetailedPreview' >{host.children.description}</div>
            <div className='infoButtonInDetailedPreview' onClick={() => setShowEmail(!showEmail)}>
                {showEmail ? host.children.email : 'Email'}
            </div>
            <div className='infoButtonInDetailedPreview' onClick={() => setShowPhone(!showPhone)}>
                {showPhone ? host.children.phone : 'Phone'}
            </div>
        </div>
    );
}