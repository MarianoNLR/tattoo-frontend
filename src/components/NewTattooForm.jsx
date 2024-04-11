import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom' 
import './styles/newTattooForm.css'

export default function NewTattooForm () {
  const [categories, setCategories] = useState([])
  const formRef = useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3000/tattoo/category')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData(formRef.current)

    try {
      const res = await fetch('http://localhost:3000/tattoo', {
        method: 'POST',
        body: dataToSend
      })

      if (res.ok) {
        navigate('/')
      } else {
        console.error('Error sending form.')
      }
    } catch (error) {
        console.error('Error sending form.')
    }
  }

  return (
    <div className="FormWrapper">
      <p className='FormTitle'>New Tattoo Form</p>
      <form ref={formRef} encType="multipart/form-data" className="Form" >
        <input type="text" placeholder="Tattoo's name" name="name" id="name"></input>
        <select name="category">
          {categories && 
            categories.map((item, index) => {
              return(
                <option key={index} value={item.name}>{item.name}</option>
              ) 
            })
          }
          
        </select>
        <input type="file" name="image" id="image" />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}