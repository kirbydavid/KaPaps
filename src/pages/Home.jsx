    import Header from "../Components/Header"
    import Library from "../Components/Library"

    export default function Home() {
        return (
            <>
                <Header />

                <div className="flex flex-col items-center justify-center max-h-[80vh] border">
                    <Library/>

                </div>

            </> 
        )
    }

