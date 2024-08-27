import React from 'react'
import {useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
const ProductDetail = ({list}) => {


  const {num} = useParams();
  
  
  const found=list.find(item=>item.no==num)
  
  return (
    <div className='list-container'>
      
          <div className='detail-item'>
          <p>상품명:{found.title}</p>
          <p>가격:{found.price} 
            <br></br> 
          {found.delivery=='free' ? <span>배송비 무료</span>: <span> {found.delivery}원</span>}</p>
          <img src={found.src} width='500px'></img>
          <Link to='/list'> 목록으로 돌아가기</Link>
          </div>

    </div>
  )
}

export default ProductDetail