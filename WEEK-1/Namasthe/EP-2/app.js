import React from 'react'
import ReactDOM from 'react-dom/client';

const container = React.createElement("div",{ id: "parent" },[
    React.createElement("div",{ id: "child" },[
        React.createElement("h1", {}, "I am h1 Tag🚀 "),
        React.createElement("h2", {}, "I am h2 Tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement('h1',{},'I am h1 tag'),
        React.createElement('h2',{},'I am h2 tag'),
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);