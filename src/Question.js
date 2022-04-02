import React, { useState } from "react";
import Answer from "./Answer";
import open from './resources/open.png'
import close from './resources/close.png'

export default function Question(question) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <>
            <div className="questionType" 
                onClick={() => setShowAnswer(!showAnswer)}
                >
                {question.children.question}
                <div className="open-close-element">
                    {showAnswer ? 
                    <img src={close}/> : 
                    <img src={open} />}
                </div>
            </div>
            {showAnswer && <Answer>{question.children.answer}</Answer>}
        </>
    );
}