
export default function Header() {
    return (
        <>
            <header className="absolute top-0 left-0 w-full flex flex-col space-y-0 bg-white">
                <img src={headerImage} alt="Logo" className="w-40 h-40" />
            </header>
        </>
    );
}