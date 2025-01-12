
export default function Header() {
    return (
        <>
            <header className="absolute top-0 left-0 w-full flex flex-col space-y-0 bg-white">
                
                <div className="w-full h-4 bg-customBlue"></div>
                <div className="w-full h-4 bg-customYellow"></div>
                <div className="w-full h-4 bg-customRed"></div>

                <div className="flex justify-center border rounded border-slate-300 w-full mb-10 px-2 py-2 bg-white ">
                    <a href="#" className="font-bold text-4xl text-center rounded-stroke ">
                        S<span className="text-black">I</span><span className="text-black">M</span><span className="text-black">P</span><span className="text-blue-500">L</span><span className="text-yellow-500">A</span><span className="text-red-500">W</span><span className="text-black">C</span><span className="text-black">I</span><span className="text-black">T</span><span className="text-black">Y</span>
                    </a>
                </div>

                
            </header>
        </>
    )
}
