import React from "react"
import FrequantlyAskedQuestions from "../../components/FrequantlyAskedQuestions/FrequantlyAskedQuestions"

export default function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-4xl bg-hacky-50 text-white pb-5">
            <FrequantlyAskedQuestions />
        </div>
    )
}