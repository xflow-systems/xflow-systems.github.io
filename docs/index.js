import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

const App = async () => html`
<div>
    <div style="background: #f0f0f0; padding: 1em">
        <div style="max-width: 800px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 2em;">Project <b>XFlow</b></div>
            <div style="display: flex; align-items: center">
                <a href="/live-code/preview.html" style="color: black; text-decoration: underline; padding: 0 2em; font-size: 1.5em">Live Code Editor</a>
            </div>
        </div>
    </div>
    <div style="background: black; padding: 1em; color: white">
        <div style="max-width: 800px; margin: 0 auto; display: flex; justify-content: center; align-items: center;">
            <img style="margin-right: 2em; height: 2em; cursor: pointer; filter: invert(100%)" src="images/github.png"></img>
            <div>
                Ask for Github read+<b>write</b> access: <span style="text-decoration: underline">stoand@protonmail.com</span>
            </div>
        </div>
    </div>
    <div style="max-width: 800px; margin: 0 auto; padding: 1em">
        <div style="font-size: 1.6em; margin: 2em 0">Why XFlow?</div>

        <audio controls style="width: 100%">
            <source src="podcast/podcast0.wav" type="audio/wav" />
            Your browser does not support the audio element.
        </audio>
        
        <div style="font-size: 1.6em; margin: 2em 0">What is XFlow?</div>

        <div>
            XFlow is a fullstack programming language: a database, backend and frontend are all defined in <b>.xfl</b> files.
        </div>
        <div style="margin: 1em 0">
            <a href="/live-code/preview.html">Check out an example</a>
        </div>
        
        <div style="font-size: 1.6em; margin: 2em 0">News</div>
        
        <div style="font-size: 1.2em; margin: 2em 0"><b>13/10/24</b> Aggregations Work</div>

        <div id="news-aggregations" style="height: 400px"></div>
    </div>
</div>
`;

async function bootstrap() {
    render(await App(), document.querySelector("#root"));


    setTimeout(() => {
        var editor = ace.edit("news-aggregations");
        window.editor = editor;
        editor.session.setOption("useWorker", false);
        // editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/html");
        editor.setValue(`
Average(
    session,
    sum: reduce(redSum, value, 0),
    count: reduce(redCount, user_id, 0),
    avg: sum / count
) :- AverageInput(@session: Session, @user_id: Id, value: Int).

query_test "Aggregations" {
    
    inputs {
        AverageInput(0, 1, 10),
        AverageInput(0, 2, 20),
        AverageInput(0, 3, 0),
        AverageInput(0, 4, 30),
        AverageInput(1, 5, 2),
    }

    expected_outputs {
        Average(0, 60, 4, 15),
        Average(1, 2, 1, 2),
    }
}
        
    `.trim(), true);
    }, 300);
}

bootstrap();

