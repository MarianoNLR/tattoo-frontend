import PropTypes from 'prop-types';
import {TattooCard} from './TattooCard'

export function TattooList(props) {

  return(
    <>
      {props.data && props.data.length > 0 ? 
      
      props.data.map((item, index) => {
        return(
          <TattooCard key={index} name={item.name} image={item.imageURL} category={item.category}></TattooCard>
        )
      })
      :
      <h2>No se encontraron elementos</h2>
      }  
    </>
  )
}

TattooList.propTypes = {
  data: PropTypes.array.isRequired
}