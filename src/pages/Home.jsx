import Header from "../Components/Header"

export default function Home() {
    return (
        <>
        <Header/>
        
        <div className="flex flex-col items-center space-y-6">
            <input placeholder="Search here" className="border rounded border-slate-300 w-[20%]"></input>
            <div className="border rounded border-slate-300 w-[80%] h-[80%] p-4 space-y-3">

                <LawCard
                    lawName="Republic Act No. 12119"
                    briefDescription="This law aims to improve public safety."
                    tags={["Safety", "Public Safety"]}
                />


            </div>

            <div className="flex flex-row items-center space-x-2">
            <p className="text-xl">Can't find the law here?</p>
            <a href="">Click me!</a>
            </div>
            
        </div>

        </>
    )
}

const LawCard = ({ lawName, briefDescription, tags }) => {
    return (
        <div className="border rounded border-slate-300 p-4">
            <a href="#">
                <h1 className="font-bold text-lg">{lawName}</h1>
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
