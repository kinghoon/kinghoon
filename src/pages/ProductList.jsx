import React from 'react'
import { Link} from 'react-router-dom'

const ProductList = ({list}) => {


     
  return (
    <div className='list-container'>
      {list.map(item=>
         <Link to={`/detail/${item.no}`} key={item.no}>
        <div className='product-container'>
        <img src={item.src} width='300px' ></img>
        <p>{item.title}</p>
        <p>{item.price}</p>
        </div>
        </Link>
      )}

    </div>
    
  )
}

export default ProductList