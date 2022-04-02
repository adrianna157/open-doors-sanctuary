import React, {useState} from "react";
import questions from '../../faq.json'
import Question from "../Question/Question";

export default function FrequantlyAskedQuestions() {

    // TODO get @questions from DB or somewhere else
    return (
        <div className="centerized">
            {/* TODO add styles of common text */}
            <h1 className="main-faq-title">Frequntly asked questions</h1>
            {questions.map((question) => {
                return <Question className="centerized" 
                        key={question.id}
                    >{question}</Question>
            })}
            <h2>Have additional questions?</h2>
        </div>
    );
}