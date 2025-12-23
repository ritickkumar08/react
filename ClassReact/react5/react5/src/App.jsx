import './App.css'
import ApiCalling from './components/ApiCalling'
import AsyncAwait from './components/AsyncAwait'
import AxiosApi from './components/AxiosApi'
import AxiosPromise from './components/AxiosPromise'
import Person from './components/Person'

function App() {
 
  return (
    <>
      <h1>Batching</h1>
      <Person/>
      {/* <ApiCalling/> */}
      {/* <AsyncAwait/> */}
      {/* <AxiosApi/> */}
      <AxiosPromise/>
    </>
  )
}

export default App
