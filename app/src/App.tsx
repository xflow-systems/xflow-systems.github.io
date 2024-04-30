import { Outlet, NavLink } from "react-router-dom";

function buttonActiveClass({ isActive }: { isActive: boolean }) {
    return isActive ? 'text-zinc-500 cursor-default' : 'underline';
}

export default function App() {
    return <div className="mx-auto max-w-7xl text-xl">
        <a href="./preview.html" className="block bg-amber-500 p-10 font-bold underline">
            Check Out XFlow Alpha Version 0.1.0 (Live In-Browser Code Editor)!
        </a>

        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4 p-10 border-l-2 border-b-2 lg:border-b-0 border-zinc-200">
                <div className="pb-10 font-bold text-2xl">Posts</div>
                <div className="pb-10"><NavLink className={buttonActiveClass} to={"/"}>What is XFlow?</NavLink></div>
                <div className="pb-10"><NavLink className={buttonActiveClass} to={"/query-engine"}>The Query Engine</NavLink></div>
            </div>
            <div className="lg:w-3/4 border-x-2 border-zinc-200 pb-20">
                <div className="">
                    
                </div>
                <Outlet />
            </div>
        </div>
    </div >
}
