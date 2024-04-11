import {useState, useEffect} from 'react'
import './styles/sideBar.css'
import PropTypes from 'prop-types';

export default function SideBar({setCategory}) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/tattoo/category`)
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setCategory(category)
  }
  
  return (
    <>
    <p onClick={() => handleCategoryClick('')} className={selectedCategory === '' ? 'selected_category': ''}>Todos</p>
    {categories && (
      categories.map((item, index) => {
        return(
        <p key={index} onClick={() => handleCategoryClick(item.name)} className={selectedCategory === item.name ? 'selected_category': ''}>{item.name}</p>
        )  
      })
    )}
    </>
  )
}


SideBar.propTypes = {
  setCategory: PropTypes.func.isRequired
}