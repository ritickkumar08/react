/**
 * <div id="parent">
 *      </div id="child1">
 *          <h1>I am child 1</h1>
 *          <h1>Another Child 1 </h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I am child 2</h2>
 *          <h1>Another child 2 </h1>
 *      </div>
 * </div>        
 */

import React from "react"
import ReactDOM from "react-dom"

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"I am Child 1"),
                React.createElement("h1",{},"I am Another Child 1")
            ]),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"I am child 2"),
                React.createElement("h1",{},"I am another child 2")
            ])
    ])

const root = ReactDOM.createRoot(document.getElementById("helloJS"))
root.render(parent)