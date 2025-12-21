import './App.css'
import Controlled from './components/Controlled'
import ControlledInput from './components/ControlledInput'
import Counter from './components/Counter'
import ListRendering from './components/ListRendering'
import Logged from './components/Logged'
import Parent from './components/Parent'
import UserCard from './components/userCard'
import { books } from './utils/bookData'

function App() {

  return (
    <>
     <UserCard name="tickri" age="21" city="gorang"/>
     <Counter/>
     <Parent/>
     <ControlledInput/>
     <Controlled/>
     <Logged/>
     <ListRendering booksList={books}/>
    </>
  )
}

export default App
