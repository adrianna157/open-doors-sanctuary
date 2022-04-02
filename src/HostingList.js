import React from 'react'
import HostShortForm from './HostShortForm';

export default function hostingList(hostSummaries) {

    return (
        <>
            <div>
                {hostSummaries.children.map((host) => {
                    return <HostShortForm key={host.id}>{host}</HostShortForm>
                })}
            </div>
        </>
    );

}