import { Components } from './diagrams';

function App() {
    return <div className="mx-auto max-w-6xl text-xl pb-20 border-2 border-zinc-100 m-2">
        <div className="bg-zinc-100 p-10 font-bold">
            XFlow Systems
        </div>
        <div className="p-10 text-3xl font-bold">
            What is XFlow?
        </div>

        <div className="px-10">
            <div className="py-4">XFlow is a <b>Database</b> combined with a <b>Fullstack Framework</b></div>
        </div>

        <div className="p-10" dangerouslySetInnerHTML={{__html: Components}}></div>
        
        <div className="p-10 text-3xl font-bold">
            How is XFlow Different?
        </div>
        <div className="p-10 text-2xl">
            XFlow is <b>Push Based</b>
        </div>
        <div className="px-10 text-xl">
            XFlow is <b>Push Based</b>
        </div>
    </div >
}

export default App
