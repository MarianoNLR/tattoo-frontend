import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import NewCategoryForm from '../components/NewCategoryForm.jsx'
export default function NewCategory () {

  return(
    <>
      <Header />
      <main>
        <div>New Category Page</div>
        <NewCategoryForm></NewCategoryForm>
      </main>
      <Footer className='Footer'></Footer>
    </>
  )
}