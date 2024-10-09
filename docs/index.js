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
    </div>
</div>
`;

async function bootstrap() {
    render(await App(), document.querySelector("#root"));
}

bootstrap();

