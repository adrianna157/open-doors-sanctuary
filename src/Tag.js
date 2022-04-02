import React from 'react'

export default function Tag(tag) {
    return (
        <div className='tag tag-blocks' >
            {tag.children}
        </div>
    );
}