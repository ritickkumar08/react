import './App.css'
import Apple from './components/Apple'
import Events from './components/Events'
import {Lucky, Lucky1 } from './components/lucky'
import Propss from './components/Propss'
import EmployeeCard from './components/EmployeeCard'
import Display from './components/Display'

function App() {
  return(
    <>
      <h1>Hello from App</h1>
      {/* <Apple />
      {/* <Lucky1/>
      <Lucky/> */}
      {/* <Events/>
      <Propss age="24" name="Ritick"/> */} 
      <EmployeeCard name="Ritick" designation="SD" experience="2 years"/>
      <Display items="['pen', 'pencil', 'ruler', 'eraser']" header="Stationary items"/>
    </>
  )
}

export default App
