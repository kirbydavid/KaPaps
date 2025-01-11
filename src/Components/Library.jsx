import {collection,doc,getDocs} from "firebase/firestore"
import {db} from "../config/firebase"

const fetchLawsDocuments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Laws"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`); // Log document ID and data
      });
    } catch (error) {
      console.error("Error fetching documents: ", error); // Log any errors
    }
  };
  
  // Call the function to execute the fetch
  fetchLawsDocuments();
  
export default function Library() {
    return (
        <div>

            <LawCardContainer
                lawId="Republic Act No. 10173"
                briefDescription="Data Privacy Act of 2012"
                tags={["Safety", "Public Safety"]}
            />
        </div>
    )
}

const LawCardContainer = ({ lawId, briefDescription, tags }) => {
    return (
        <div className="border rounded border-slate-300 w-[80%] h-[80%] p-4 space-y-3">
            <LawCardTags
                lawId={lawId}
                briefDescription={briefDescription}
                tags={tags}
            />
        </div>
    );
};

const LawCardTags = ({ lawId, briefDescription, tags }) => {
    return (
        <div className="border rounded border-slate-300 p-4">
            <a href="#">
                <div className="flex flex-row items-center space-x-2">
                    <h1 className="font-bold text-lg">{lawId}</h1>
                    <h4 className="text-md text-gray-700">{briefDescription}</h4>
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
