import { useState, useEffect } from 'react'
import { TattooList } from './components/TattooList'
import './App.css'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

function App() {
  const [category, setCategory] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/tattoo?category=${category}`)
    .then(res => res.json())
    .then(data => setData(data))
  },[category]) 

  return (
    <>
      <Header />
      <main>
        <div className='SideBar'>
        <SideBar setCategory={setCategory}/>
        </div>
        <div className='TattooList'>
          <TattooList data={data} />
        </div>
      </main>
    </>
  )
}

export default App
