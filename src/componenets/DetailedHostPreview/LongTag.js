import React from 'react'

export default function LongTag(tag) {
    return (
        <div className='longTag'>
            {tag.children}
        </div>
    );
}