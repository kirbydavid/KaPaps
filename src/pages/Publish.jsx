export default function Publish() {
    return (
        <>
            <div className="flex items-center justify-center">

                <div className="border rounded border-slate-300 h-[60%] p-4 space-y-3">
                    <h1 className="text-lg font-bold">Publish Law</h1>
                    <input
                        type="text"
                        placeholder="Enter law details"
                        className="border rounded border-slate-300 w-full p-2"
                    />
                    <button className="border rounded border-slate-300 w-full p-2 bg-blue-500 text-white hover:bg-blue-600">
                        Post
                    </button>
                </div>


            </div>

        </>
    )
}
