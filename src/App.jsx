import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState("");
   

  return (
    <>
   
    <Navbar search={search} setSearch={setSearch}/>
    <div className="sody min-h-4">
    <Manager search = {search}/>
    </div>
    <Footer/>
    </>
  )
}

export default App
