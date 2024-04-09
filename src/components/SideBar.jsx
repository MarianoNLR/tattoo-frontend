import React, {useState, useEffect} from 'react'

export function SideBar({setCategory}) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/tattoo/category`)
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  
  return (
    <>
    {categories && (
      categories.map((item, index) => {
        return(
        <p key={index}>{item.name}</p>
        )  
      })
    )}
    </>
  )
}