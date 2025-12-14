import './App.css'
import Header from './components/Header'
import ParentComponent from './components/ParenComponent'
import Profile from './components/ProfileComponent'
import PackingList from './components/PackingList'

// function Header() {
//   return (
//     <>
//       <h1>Ritick</h1>
//       <h2>I am happy learnign REACT</h2>
//     </>
//   )
// }

function App() {
  return (
    <>
      {/* {Header()} */}
      <Header/>
      <h1>Hello</h1>
      <ParentComponent/>
      <Profile/>
      <PackingList />
    </>
  )
}

export default App

