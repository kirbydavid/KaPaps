import {collection,doc,getDocs} from "firebase/firestore"
import {db} from "../config/firebase"
import React, { useEffect, useState } from 'react';

export default function Library() {
    const [laws, setLaws] = useState([]); // State to store fetched laws

    const fetchLawsDocuments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Laws"));
            const lawsData = []; // Array to hold the fetched laws

            querySnapshot.forEach((doc) => {
                lawsData.push({ id: doc.id, ...doc.data() }); // Push each document's data into the array
            });

            setLaws(lawsData); // Update state with fetched laws
        } catch (error) {
            console.error("Error fetching documents: ", error); // Log any errors
        }
    };

    useEffect(() => {
        fetchLawsDocuments(); // Fetch laws when the component mounts
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="flex flex-col items-center overflow-y-auto max-w-screen-lg space-y-2">
            {laws.map((law) => (
                <LawCardContainer
                    key={law.id} // Use document ID as key
                    lawId={law.lawId} // Assuming lawId is a field in your document
                    title={law.title} // Assuming title is a field in your document
                    briefDescription={law.briefDescription} // Assuming briefDescription is a field in your document
                    tags={law.tags ? law.tags.split(', ') : []} // Convert tags string to an array
                />
            ))}
        </div>
    );
}

const LawCardContainer = ({ lawId, title, briefDescription, tags }) => {
    return (
        <div className="border rounded border-slate-300 w-[80%] h-[80%] p-4 space-y-3">
            <LawCardTags
                lawId={lawId}
                title={title}
                briefDescription={briefDescription}
                tags={tags}
            />
        </div>
    );
};

const LawCardTags = ({ lawId, title, briefDescription, tags }) => {
    return (
        <div className="border rounded border-slate-300 p-4">
            <a href="">
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
            </a>
        </div>
    );
};
