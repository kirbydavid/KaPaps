import Header from "../Components/Header"
import Library from "../Components/Library"

export default function Home() {
    return (
        <>
            <Header />

            <div className="">
                <input placeholder="Search here" className="border rounded border-slate-300 w-[20%]"></input>
                <Library/>

            </div>

        </>
    )
}

