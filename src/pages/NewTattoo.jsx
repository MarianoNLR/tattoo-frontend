import NewTattooForm from "../components/NewTattooForm.jsx"
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import './styles/newTattoo.css'

export default function NewTattoo () {
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