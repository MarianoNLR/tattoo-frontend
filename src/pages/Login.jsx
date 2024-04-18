import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import LoginForm from "../components/LoginForm.jsx"

export default function Login() {
  return (
    <>
      <Header />
      <main className="login-main">
        <LoginForm></LoginForm>
      </main>
      <Footer className='Footer'></Footer>
    </>
  )
}