import { Outlet } from "react-router-dom";

export default function App() {
    return <div className="mx-auto max-w-6xl text-xl pb-20 border-x-2 border-zinc-200">
        <a href="./preview.html" className="block bg-amber-500 p-10 font-bold underline">
            Check Out XFlow Alpha Version 0.1.0 (Live In-Browser Code Editor)!
        </a>

        <Outlet />
    </div >
}
