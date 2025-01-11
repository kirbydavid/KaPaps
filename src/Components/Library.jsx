import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import React, { useEffect, useState } from 'react';

export default function Library() {
    const [laws, setLaws] = useState([]); // State to store fetched laws

    const fetchLawsDocuments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Laws"));
            const lawsData = [];

            querySnapshot.forEach((doc) => {
                lawsData.push({ id: doc.id, ...doc.data() });
            });

            setLaws(lawsData);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    };

    useEffect(() => {
        fetchLawsDocuments();
    }, []);

    return (
        <div className="flex flex-col items-center overflow-y-auto max-w-screen-lg space-y-2">
            {laws.map((law) => (
                <LawCardContainer
                    key={law.id}
                    lawId={law.lawId}
                    title={law.title}
                    summary={law.summary}
                    briefDescription={law.briefDescription}
                    reference={law.reference}
                    tags={law.tags ? law.tags.split(', ') : []}
                />
            ))}
        </div>
    );
}

const LawCardContainer = ({ lawId, title, briefDescription, summary, tags }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                className="border rounded border-slate-300 w-[80%] h-[80%] p-4 space-y-3 cursor-pointer"
                onClick={openModal}
            >
                <LawCardTags
                    lawId={lawId}
                    title={title}
                    briefDescription={briefDescription}
                    tags={tags}
                />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-8 rounded shadow-lg max-w-screen-lg w-[80%] h-auto lg:h-[80%] lg:w-[60%]">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="text-4xl absolute top-0 right-4 text-red-600 hover:text-gray-800"
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <h1 className="mx-3 font-bold text-4xl mb-4">{title}</h1>
                        <div className="mt-0">
                           {tags.map((tag, index) => (
                              <span key={index} className="mx-3 text-base border rounded inline-block bg-slate-100 px-2 mr-2">
                                    {tag}
                              </span>
                           ))}
                        </div>
                        <p className="text-justify mx-3 mt-5 mb-4 text-2xl font-semibold">{summary}</p>
                        <div className="mb-4">
                        </div>
                        <div className="mx-3 flex space-x-4">
                            <button
                                onClick={() => window.open(reference, '_blank')}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Reference
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const LawCardTags = ({ lawId, title, briefDescription, tags }) => {
    return (
        <div className="border rounded border-slate-300 p-4">
            <div className="flex flex-row items-center space-x-5">
                <h1 className="font-bold text-lg">{lawId}</h1>
                <h4 className="text-md text-gray-700">{title}</h4>
            </div>

            <h3 className="text-md text-gray-700">{briefDescription}</h3>
            <div className="mt-2">
                {tags.map((tag, index) => (
                    <span key={index} className="text-sm border rounded inline-block bg-slate-100 px-2 mr-2">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};
