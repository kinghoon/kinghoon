import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='link-container'>
            <Link to="/">닭볶음탕</Link>
        </div>
        <div className='link-container'>
            <Link to="/">Main</Link>{" "}
            <Link to="/list">List</Link>
        </div>
        <div className='link-container'>
            <Link to='/'>로그인</Link>
        </div>
    </div>
  )
}

export default Header