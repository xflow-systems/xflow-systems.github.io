import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

const App = (name) => html`<div class="main-container">
    hello!! ${name}<b>dude</b>
</div>`;

render(App("andy"), document.querySelector("#root"));

