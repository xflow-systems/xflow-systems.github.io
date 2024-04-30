import { Outlet, Link } from "react-router-dom";

export default function App() {
    return <div className="mx-auto max-w-7xl text-xl">
        <a href="./preview.html" className="block bg-amber-500 p-10 font-bold underline">
            Check Out XFlow Alpha Version 0.1.0 (Live In-Browser Code Editor)!
        </a>

        <div className="flex">
            <div className="w-1/4 p-10 border-l-2 border-zinc-200">
                <div className="pb-10 font-bold text-2xl">Posts</div>
                <div className="pb-10 underline"><Link to={"/"}>What is XFlow?</Link></div>
                <div className="pb-10 underline"><Link to={"/query-engine"}>The Query Engine</Link></div>
            </div>
            <div className="w-3/4 border-x-2 border-zinc-200 pb-20">
                <Outlet />
            </div>
        </div>
    </div >
}
