import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {


  const {num} = useParams();
  
  
  const found=list.find(item=>item.no==num)
  
  return (
    <div className='list-container'>
      
          <div className='detail-item'>
          <p>상품명:{found.title}</p>
          <p>가격:{found.price}
          배송비:{found.delivery}</p>
          <img src={found.src} width='500px'></img>
          </div>

    </div>
  )
}

export default ProductDetail