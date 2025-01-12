import headerImage from '../assets/Center.png';
export default function Header() {
    return (
        <>
            <header className="absolute top-0 left-0 w-full flex flex-col space-y-0 bg-white">
                
                <div className="w-full h-4 bg-customBlue"></div>
                <div className="w-full h-4 bg-customYellow"></div>
                <div className="w-full h-4 bg-customRed"></div>
                
                <div className="flex justify-center border rounded border-slate-300 w-full mb-10 px-2 py-0 bg-white ">
                <img src={headerImage} alt="headerImage" className="h-[20%] w-[35%] md:w-[20%]" />

                </div>

                
            </header>
        </>
    )
}
