import React from 'react'

export default function ShortTag(tag) {
    return (
        <div className='shortTag'>
            {tag.children}
        </div>
    );
}