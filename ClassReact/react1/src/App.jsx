//component

// import Cat from "./components/Cat"
// import { Cow, Dog } from "./components/Dog"
// import Ritick from "./components/Ritick"
import EmployeeCard from "../../react2/vite-project/src/components/EmployeeCard"
import Try from "./components/Try"

function App() {
  return(
    <div>
      <h1>Hello, I have arrived</h1>
      {/* <Ritick/>
      <Cat/>
      <Dog/>
      <Cow/> */}
      {/* <Try/> */}
      <EmployeeCard name="Ritick" designation="SDE" experience="2 years"/>
    </div>
  )
}

export default App