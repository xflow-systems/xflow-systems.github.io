import { Components } from './diagrams';

function App() {
    return <div className="mx-auto max-w-6xl text-xl pb-20 border-x-2 border-zinc-200">
        <div className="bg-zinc-200 p-10 font-bold">
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
                    Traditional pull based databases work with one-off queries. You send a query, you get a result.
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
                    This is especially useful in large applications with complex relationships.
                </li>
                <li className="py-4">
                    Apps are realtime by default. Things like chat apps are trivial to implement.
                </li>
                <li className="py-4">
                    Data transmission and re-rendering are more efficient because we don't update things that didn't change.
                </li>
            </div>

            <div className="p-4 text-2xl text-bold">
                Existing Push based Systems
            </div>

            <div className="p-4 text-xl text-bold">
                <div className="py-4">
                    Firebase is a step in the right direction but is has some major downsides.
                    It cannot handle complex relational queries and it is weakly typed with no fixed schema.
                    Also configuring what queries are allowed by whom is somewhat unwieldy.
                </div>

                <div className="py-4">
                    Materialize DB doesn't suffer from the downsides of Firebase and uses SQL like more traditional databases.
                    However because of the boundary between SQL and the code calling it we have the mess having to know
                    what invididual subscriptions should be active. Essentially subscriptions within subscriptions are not very elegant.
                </div>
            </div>

            <div className="p-4 text-2xl text-bold">
                How XFlow DB improves over existing push based databases
            </div>

            <div className="p-4 text-xl list-disc">
                <li className="py-4">
                    Over Firebase - A strong type system and a fixed schema. Complex relational queries work well in XFlow's expressive "Datalog"
                    query language.
                </li>

                <li className="py-4">
                    Over Materialize - A single unified subscription. No need for an ORM, API and frontend state managment logic.
                </li>
            </div>
        </div>
    </div >
}

export default App
