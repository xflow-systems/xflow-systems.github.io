import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

const App = (name) => html`hello!! ${name}<b>dude</b>`;

render(App("andy"), document.querySelector("#root"));

