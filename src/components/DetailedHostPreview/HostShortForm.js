import React, {useState} from 'react'
import ShortTag from '../DetailedHostPreview/ShortTag';
import DetailedPreview from '../DetailedHostPreview/DetailedPreview';
import styles from './local.module.css';

export default function HostShortForm({isBlocked, block, host}) {
    const [detailedPreview, setDetailedPreview] = useState(false)

    const close = () => {
        block(false);
        setDetailedPreview(false);
    }

    const open = () => {
        if(isBlocked()) return;
        block(true);
        setDetailedPreview(true);
    }

    return (
        <>
            <div className={styles.hostShortType} onClick={open}>
                <h1 className={styles.title}>{host.title}</h1>
                <h2 className={styles.location}>{host.location}</h2>
                <div className={styles.container}>
                    { host.short_term ? <ShortTag>Short</ShortTag> : null}
                    { host.long_term ? <ShortTag>Long</ShortTag> : null}
                    { host.kid_friedly ? <ShortTag>Kids</ShortTag> : null}
                    { host.pet_friendly ? <ShortTag>Pets</ShortTag> : null}
                </div>
            </div>

            {detailedPreview && <DetailedPreview onClick={close} host={host}/>}
        </>
    );
}