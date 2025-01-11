import React, { useState } from 'react';
import Header from '../components/Header';
import Library from '../components/Library';

export default function Home() {
    const [isChatheadOpen, setChatheadOpen] = useState(false); // State for chathead visibility

    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center mt-28 max-h-[80vh]">
                <Library />
            </div>

            <div className="fixed bottom-4 right-4">
                {!isChatheadOpen && (
                    <button
                        className="bg-customBlue text-white px-4 py-2 rounded-full shadow-lg"
                        onClick={() => setChatheadOpen(true)}
                    >
                        Chat
                    </button>
                )}
                {isChatheadOpen && (
                    <div className="bg-white p-4 rounded-lg shadow-lg mt-2 w-64">
                        <div className="flex justify-between items-center">
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
                    </div>
                )}
            </div>
        </>
    );
}