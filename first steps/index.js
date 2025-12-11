/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>child 1</h1>
 *          <h1>Another Child 1 </h1>
 *      </div>
 *      <div id="child2">  
 *          <h1>child 2</h1>
 *          <h1>Another Child 2 </h1>
 *      </div>
 * </div> 
 */

// const { createElement } = require("react");


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{},"child 1"),
            React.createElement("h1",{},"Another child 1")
        ]),
    React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{},"child 2"),
            React.createElement("h1",{},"Another child 2")
        ])
])
const root = ReactDOM.createRoot(document.getElementById("hello"))
root.render(parent)

// React.createElement - we get react elements
// react elements are objects in javaScript => the render method takes the object and converts them to HTMl, and render it to the page.