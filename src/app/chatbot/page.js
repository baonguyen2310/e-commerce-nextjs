'use client'

import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
    async function handleSendBtn() {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = document.getElementById('prompt').value

        const result = await model.generateContent(prompt);

        document.getElementById('answer').innerText = result.response.text();
    }

    return (
        <div>
            <h1>Chatbot</h1>
            <input id="prompt" />
            <button onClick={handleSendBtn}>Send</button>
            <p id='answer'></p>
        </div>
    )
}

export default Chatbot