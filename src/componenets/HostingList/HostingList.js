import React, { useState } from 'react'
import HostShortForm from '../ShortHostPriview/HostShortForm';

export default function HostingList(hostSummaries) {
    const [blocked, setBlocked] = useState(false);

    const isBlocked = () => {
        return blocked;
    }

    const block = (state) => {
        setBlocked(state);
    }

    return (
        <>
            <div className='grids-for-list'>
                {hostSummaries.children.map((host) => {
                    return <HostShortForm isBlocked={isBlocked} block={block} host={host} key={host.id} />
                })}
            </div>
        </>
    );

}