import React, {useState} from 'react'
import Tag from '../DetailedHostPreview/Tag';
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
                    { host.children.short_term ? <Tag>Short</Tag> : null}
                    { host.children.long_term ? <Tag>Long</Tag> : null}
                    { host.children.kid_friedly ? <Tag>Kids</Tag> : null}
                    { host.children.pet_friendly ? <Tag>Pets</Tag> : null}
                </div>
            </div>

            {detailedPreview && <DetailedPreview onClick={close} host={host}/>}
        </>
    );
}