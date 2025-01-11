// src/AskLaw.js
import React, { useState } from 'react';
import axios from 'axios';

export default function AskReyes() {  // Corrected function definition
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post('http://localhost:5000/ask', {
                question: question,
            });
            setResponse(res.data);
        } catch (err) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Ask a Law Question</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question here..."
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
                <div>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}