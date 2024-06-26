import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NewTattooForm from "../components/NewTattooForm.jsx"
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import './styles/newTattoo.css'

export default function NewTattoo () {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('loggedTattooApp')

    if (!token) {
      navigate('/login')
    }
  }, [navigate])
  return (
    <>
      <Header></Header>
      <main className="new-tattoo-main">
      <NewTattooForm />
      </main>
      <Footer className="Footer"></Footer>
    </>
  )
}