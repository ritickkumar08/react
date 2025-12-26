import React from "react";
import Counter from "./components/Counter";
// import Counter from "./components/Counter";

// //class based component
// class App extends React.Component{

//   constructor(){
//     super()
//     this.state = {
//       count : 0
//     }
//   }

//   decrease(){
//     this.setState({count: this.state.count-1})
//   }

//   componentDidMount(){
//     console.log("Hello");   
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={()=> this.setState({count:this.state.count+1})}>Increase</button>
//         <Counter count = {this.state.count}/>
//         <button onClick={this.decrease.bind(this)}>Decrese</button>
//       </div>
//     )
//   }
// }

// export default App


// -------------------------------------------

function App() {
  return (
    <>
     <Counter/>
    </>
  )
}

export default App
