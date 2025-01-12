import React, { useState } from 'react';
import Library from '../components/Library';
import Chatbot from '../components/Chatbot'
import Header from '../Components/Header';
export default function Home() {

    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center mt-40 max-h-[80vh]">
                <Library />
            </div>

            
        </>
    );
}