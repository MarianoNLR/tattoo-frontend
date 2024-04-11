//import React from 'react'
import PropTypes from 'prop-types';
import './styles/tattooCard.css'

export default function TattooCard ({name, image, category}) {

  return (
    <div className='CardWrapper'>
      <div className='ImageWrapper'>
        <img src={image} alt="" />
      </div>
      <div className='NameWrapper'>
        <h3>{name}</h3>
      </div>
      <div className='CategoryWrapper'>
        <p>{category}</p>
      </div>
    </div>
  )
}

TattooCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}