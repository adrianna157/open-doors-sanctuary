import React from "react";
import Question from "./Question";

export default function FrequantlyAskedQuestions() {

    let questions = ['question1', 'question2'];
    // TODO get @questions from DB or somewhere else

    return (
        <div className="centerized">
            {/* TODO add styles of common text */}
            <h1>Frequntly asked questions</h1>
            {questions.map((question) => {
                return <Question>{question}</Question>
            })}
        </div>
    );
}