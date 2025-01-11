import React, { useState } from 'react'; // Import useState from React


import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Chatbot() {
    const [isChatheadOpen, setChatheadOpen] = useState(false); // State for chathead visibility

    return (
        <div className="fixed bottom-4 right-4 z-10">
            {!isChatheadOpen && (
                <button
                    className="bg-customBlue text-white px-4 py-2 rounded-full shadow-lg"
                    onClick={() => setChatheadOpen(true)}
                >
                    Chat
                </button>
            )}
            {isChatheadOpen && (
                <div className="bg-white p-4 rounded-lg shadow-lg mt-2 w-64 "> {/* Changed rounded-full to rounded-lg */}
                    <div className="flex justify-between items-center h-auto">
                        <h2 className="text-lg font-semibold">Chat</h2>
                        <button
                            className="text-red-500"
                            onClick={() => setChatheadOpen(false)}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="mt-2">
                        <p>Welcome to the chat! How can we help you?</p>
                    </div>
                    <input
                        placeholder="Ask a question!"
                        className='w-full border-t-2 mt-4 focus:outline-none focus:bg-gray-100 bg-transparent'
                    />                </div>
            )}
        </div>
    );
}