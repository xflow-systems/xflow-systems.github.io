import { Components } from './diagrams';

function App() {
    return <div className="mx-auto max-w-6xl text-xl pb-20 border-2 border-zinc-100 m-2">
        <div className="bg-zinc-100 p-10 font-bold">
            XFlow Systems
        </div>

        <div className="p-10">
            <div className="py-10 text-3xl font-bold">
                What is XFlow?
            </div>

            <div className="px-10">
                <div className="py-4">XFlow is a <b>Database</b> combined with a <b>Fullstack Framework</b></div>
            </div>

            <div className="py-10" dangerouslySetInnerHTML={{ __html: Components }}></div>

            <div className="py-10 text-3xl">
                The XFlow Database is <b>Push Based</b>
            </div>
            <div className="p-4 text-2xl text-bold">
                Push Based vs Pull Based Databases
            </div>
            <div className="p-4 text-xl text-bold">
                <div className="py-4">
                    Traditional pull based databases work with one-off queries. They send a a query, they get a result.
                    If something might have changed, they need to know when to send another query.
                </div>
                <div className="py-4">
                    Pull based databases don't need to guess if something has changed. They subscribe to a query and continously
                    get results as changes occur.
                </div>


            </div>
        </div>
    </div >
}

export default App
