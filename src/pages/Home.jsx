import { useEffect, useState } from "react"
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import TattooList from '../components/TattooList.jsx'
import SideBar from '../components/SideBar.jsx'
import './styles/home.css'

export default function Home () {
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
      <div className='Footer'>
        <Footer />
      </div>
    </>
  )
}