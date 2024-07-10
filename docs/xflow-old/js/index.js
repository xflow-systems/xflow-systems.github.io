import { WASI, File, OpenFile, ConsoleStdout, PreopenDirectory } from 'https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.2.19/+esm';
import { createElement } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import { createRoot } from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';

async function init() {

    let fileDescriptors = [
        new OpenFile(new File([])), // stdin
        ConsoleStdout.lineBuffered(console.log),
        ConsoleStdout.lineBuffered(console.log),
        new PreopenDirectory(".", {}),
    ];
    let wasi = new WASI([], [], fileDescriptors);

    let DOM = {};

    function domAdd(parentId, value) {
        if (!DOM[parentId]) {
            DOM[parentId] = [];
        }
        DOM[parentId].push(value);
    }

    function renderElementsWithId(id) {
        let elements = [];

        for (let item of DOM[id]) {
            if (item.text) {
                elements.push(item.text);
            }
        }

        for (let item of DOM[id]) {
            if (item.element) {
                let attributes = {};

                for (let actionItem of DOM[item.element.id]) {
                    if (actionItem.saveAction) {
                        attributes.onChange = e => {
                            new TextEncoder().encodeInto(e.target.value + '\0', actionItem.saveAction.saveInputBuffer);
                            saveInputRecieved(actionItem.saveAction.saveIndex);
                        };
                        attributes.onSubmit = e => {
                            e.preventDefault();
                            new TextEncoder().encodeInto('\0', actionItem.saveAction.saveInputBuffer);
                            saveInputRecieved(actionItem.saveAction.saveIndex);
                        };
                    }

                    if (actionItem.deleteAction) {
                        attributes.onClick = () => {
                            deleteTriggered(actionItem.deleteAction.deleteIndex);
                        };
                        attributes.onSubmit = e => {
                            e.preventDefault();
                            deleteTriggered(actionItem.deleteAction.deleteIndex);
                        };
                    }
                }

                for (let attributeItem of DOM[item.element.id]) {
                    if (attributeItem.attribute) {
                        let name = attributeItem.attribute.name;
                        if (name == "class") {
                            name = "className";
                        }
                        attributes[name] = attributeItem.attribute.value;
                    }
                }

                const children = renderElementsWithId(item.element.id);
                elements.push(createElement(item.element.name, attributes, ...children));
            }
        }
        return elements;
    }

    let root = createRoot(document.getElementById("react-root"));

    var importObject = {
        wasi_snapshot_preview1: wasi.wasiImport,
        for_zig: {
            loadSourceCode(srcPtr, srcLen) {
                setTimeout(() => {
                    const src = getStr(srcPtr, srcLen);
                    document.getElementById("source-code").value = src;
                });
            },
            showError(errPtr, errLen) {
                const src = getStr(errPtr, errLen);
                document.getElementById("error-container").innerText = src;
            },
            consolePrint(msgPtr, msgLen) {
                const src = getStr(msgPtr, msgLen);
                console.log(src);
            },
            finishRendering() {
                let elements = renderElementsWithId(0);
                let rootElement = createElement("div", {}, elements);
                root.render(rootElement);
                DOM = {};
            },
            createElement(parentId, id, namePtr, nameLen) {
                const name = getStr(namePtr, nameLen);
                domAdd(parentId, { element: { id, name } });
            },
            setAttribute(parentId, namePtr, nameLen, valuePtr, valueLen) {
                const name = getStr(namePtr, nameLen);
                const value = getStr(valuePtr, valueLen);
                domAdd(parentId, { attribute: { name, value } });
            },
            appendFreeText(parentId, valuePtr, valueLen) {
                const value = getStr(valuePtr, valueLen);
                domAdd(parentId, { text: value });
            },
            addSaveHandler(parentId, saveIndex) {
                const saveInputBuffer = new Uint8Array(memory.buffer, saveInputBufferStart(), saveInputBufferSize());
                domAdd(parentId, { saveAction: { saveInputBuffer, saveIndex } });
            },
            addDeleteHandler(parentId, deleteIndex) {
                domAdd(parentId, { deleteAction: { deleteIndex } });
            },
            sendActionPayload(payloadPtr, payloadLen) {
                const payload = new Uint8Array(memory.buffer, payloadPtr, payloadLen);
                ws.send(payload);
            },
        },
    };

    const context = await WebAssembly.instantiateStreaming(fetch("./zig-out/bin/xflow-front.wasm"), importObject);
    wasi.start(context.instance);

    const { renderBufferStart, render, saveInputBufferStart, saveInputBufferSize, saveInputRecieved, deleteTriggered,
        sourceCodeBufferStart, sourceCodeBufferSize, restart, memory } = context.instance.exports;

    function getStr(ptr, len) {
        const arr = new Uint8Array(memory.buffer, ptr, len);
        return new TextDecoder().decode(arr);
    }

    var prevValue = '';
    document.getElementById("error-container").innerText = "No Errors";
    
    document.getElementById("source-code").onkeyup = (e) => {
        // We want to clear all state when re-rendering 
        root = createRoot(document.getElementById("react-root"));
        
        document.getElementById("error-container").innerText = "No Errors";
        if (e.target.value !== '' && e.target.value != prevValue) {
            const sourceCodeBuffer = new Uint8Array(memory.buffer, sourceCodeBufferStart(), sourceCodeBufferSize());
            new TextEncoder().encodeInto(e.target.value + '\0', sourceCodeBuffer);
            prevValue = e.target.value;
            restart();
        }
    };

    restart();


    // const ws = new WebSocket('ws://localhost:8000');
    // ws.binaryType = "arraybuffer";
    // ws.onmessage = msg => {
    //     const mem = new Uint8ClampedArray(memory.buffer);
    //     mem.subarray(renderBufferStart()).set(new Uint8ClampedArray(msg.data));
    //     DOM = {};
    //     render();
    // };

    // ws.onopen = () => { }

    // ws.onclose = () => {
    //     setTimeout(() => {
    //         // location.reload();
    //     }, 1000);
    // }
}

init();
