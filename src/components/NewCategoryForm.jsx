import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/newCategoryForm.css'

export default function NewCategoryForm () {
  const formRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataToSend = new FormData(formRef.current)
    console.log(dataToSend)
    try {
      const res = await fetch('http://localhost:3000/tattoo/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Asegúrate de especificar el tipo de contenido
        },
        body: JSON.stringify({
          name: dataToSend.get('name')
        })
      })
      console.log(res.body)
      if (res.ok) {
        navigate('/newTattoo')
      } else {
        console.error('Error sending form.')
      }
    } catch (error) {
      console.error('Error sengind form.')
    }
  }


  return (
    <>
      <div className="category-form-wrapper">
        <p>Nueva Categoria</p>
        <form ref={formRef} className="category-form">
          <input type="text" name="name" id="name" placeholder="Category's name" />
          <button type="button" onClick={handleSubmit}>Agregar</button>
        </form>
      </div>
      
    </>
  )
}