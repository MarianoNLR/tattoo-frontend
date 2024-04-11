import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error404 from './pages/Error404.jsx'
import NewTatto from './pages/NewTattoo.jsx'
import NewCategory from './pages/NewCategory.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/newTattoo" element={<NewTatto />}></Route>
        <Route path="/newCategory" element={<NewCategory />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  )
}

export default App
