import React, { useState } from 'react'
import HostShortForm from './HostShortForm';
import styles from './local.module.css';

export default function HostingList({hostSummaries}) {
    const [blocked, setBlocked] = useState(false);

    const isBlocked = () => {
        return blocked;
    }

    const block = (state) => {
        setBlocked(state);
    }

    return (
        <>
            <div className={styles['grids-for-list']}>
                {hostSummaries.map((host) => {
                    return <HostShortForm isBlocked={isBlocked} 
                        block={block} host={host} key={host.id} />
                })}
            </div>
        </>
    );

}