import React, { useState } from 'react';
import Header from '../components/Header';
import Library from '../components/Library';
import Chatbot from '../components/Chatbot'

export default function Home() {

    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center mt-28 max-h-[80vh]">
                <Library />
            </div>

            
        </>
    );
}