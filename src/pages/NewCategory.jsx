import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import NewCategoryForm from '../components/NewCategoryForm.jsx'
import './styles/newCategory.css'

export default function NewCategory () {

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