import React from 'react'

export default function Answer(question) {
    return (
        <div className='answerType'>
            {question.children}
        </div>
    );
}