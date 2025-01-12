import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import React, { useEffect, useState } from 'react';
import '../index.css'
export default function Library() {
    const [laws, setLaws] = useState([]); // State to store fetched laws
    const [searchQuery, setSearchQuery] = useState(""); // State for the search input

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

    // filter
    const filteredLaws = laws.filter(law => {
      const lowercasedQuery = searchQuery.toLowerCase();
      return (
          (law.title && law.title.toLowerCase().includes(lowercasedQuery)) ||
          (law.summary && law.summary.toLowerCase().includes(lowercasedQuery)) ||
          (law.briefDescription && law.briefDescription.toLowerCase().includes(lowercasedQuery)) ||
          (law.tags && law.tags.toLowerCase().includes(lowercasedQuery))
      );
  });
  

    return (
        <div className="flex flex-col items-center overflow-y-auto max-w-screen-lg space-y-4 p-4">
            {/* Search Bar */}
            <div className="w-full max-w-lg p-4 ">
                <input
                    type="text"
                    placeholder="Search for laws..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300  hover:bg-gray-200 transition-colors duration-300"
                />
            </div>

            {/* display filer */}
            {filteredLaws.length > 0 ? (
                filteredLaws.map((law) => (
                    <LawCardContainer
                        key={law.id}
                        lawId={law.lawId}
                        title={law.title}
                        summary={law.summary}
                        briefDescription={law.briefDescription}
                        reference={law.reference}
                        tags={law.tags ? law.tags.split(', ') : []}
                    />
                ))
            ) : (
                <p>No results found for "{searchQuery}"</p>
            )}
        </div>
    );
}

const LawCardContainer = ({ lawId, title, briefDescription, summary, tags, reference }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                className="border rounded border-slate-300 w-[80%] h-[80%] p-4 space-y-3 cursor-pointer "
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="relative bg-white p-8 rounded shadow-lg max-w-screen-lg w-full h-auto]">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="text-4xl absolute top-0 right-4 text-red-600 hover:text-gray-800"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div className="mx-3 font-bold text-4xl mb-4">{lawId}</div>
                        <h1 className="mx-3 font-semibold text-3xl mb-4">{title}</h1>
                        <div className="mt-0">
                            {tags.map((tag, index) => (
                                <span key={index} className="mx-3 text border rounded inline-block bg-slate-100 px-2 mr-2">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-justify mx-3 mt-5 mb-4 text-2xl font-semibold">{summary}</p>
                        <div className="mb-4"></div>
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
        <div className=" p-4 border border-gray-300 rounded hover:bg-gray-200 transition-colors duration-300">
            <div className="flex flex-row items-center space-x-5">
                <h1 className="font-bold text-lg law-item">{lawId}</h1>
                <h4 className="font-semibold text-gray-700">{title}</h4>
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
