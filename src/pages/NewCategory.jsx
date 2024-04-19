import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import NewCategoryForm from '../components/NewCategoryForm.jsx'
import './styles/newCategory.css'

export default function NewCategory () {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('loggedTattooApp')

    if (!token) navigate('/login')
  }, [])

  

  return(
    <>
      <Header />
      <main className="category-main">
        <NewCategoryForm></NewCategoryForm>
      </main>
      <Footer className='Footer'></Footer>
    </>
  )
}