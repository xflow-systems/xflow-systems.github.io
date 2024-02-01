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
                    Traditional pull based databases work with one-off queries. You send a one-off query, you get a result.
                    If something might have changed, you need to know when to send another query.
                </div>
                <div className="py-4">
                    Pull based databases don't need guessing if something has changed. You subscribe to a query and continously
                    get results as changes occur.
                </div>
            </div>

            <div className="p-4 text-2xl text-bold">
                Advantages of a Push based System
            </div>

            <div className="p-4 text-xl list-disc">
                <li className="py-4">
                    Simpler business logic. We don't need to guess when to reload potentially stale data.
                </li>
                <li className="py-4">
                    Apps are realtime by default. Things like chat apps are trivial to implement.
                </li>
            </div>
        </div>
    </div >
}

export default App
