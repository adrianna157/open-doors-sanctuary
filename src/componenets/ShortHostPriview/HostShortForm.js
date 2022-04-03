import React, {useState} from 'react'
import ShortTag from '../DetailedHostPreview/ShortTag';
import DetailedPreview from '../DetailedHostPreview/DetailedPreview';

export default function HostShortForm(host) {
    const [detailedPreview, setDetailedPreview] = useState(false)

    const close = () => {
        setDetailedPreview(false);
    }

    return (
        <>
            <div className='hostShortType' onClick={() => setDetailedPreview(true)}>
                <h1 className='title'>{host.children.title}</h1>
                <h2 className='location'>{host.children.location}</h2>
                <div className='container'>
                    { host.children.short_term ? <ShortTag>Short</ShortTag> : null}
                    { host.children.long_term ? <ShortTag>Long</ShortTag> : null}
                    { host.children.kid_friedly ? <ShortTag>Kids</ShortTag> : null}
                    { host.children.pet_friendly ? <ShortTag>Pets</ShortTag> : null}
                </div>
            </div>

            {detailedPreview && <DetailedPreview onClick={close} host={host}/>}
        </>
    );
}