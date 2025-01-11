    import Header from "../Components/Header"
    import Library from "../Components/Library"

    export default function Home() {
        return (
            <>
                <Header />

                <div className="flex flex-col items-center justify-center mt-28 max-h-[80vh] ">
                    <Library/>

                </div>

            </> 
        )
    }

