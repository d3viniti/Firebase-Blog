import React from 'react'
import './Header.css'
import { FaHome } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const categories = ["Health", "Food", "Travel", "Techonology"];
    //could get categories from the backend, we don't have many so we will just store them in
    // an array
    const navigate = useNavigate();

  return (
    <div className="header-container">
        <FaHome onClick={() => navigate('/')}/>
        <div className="categories-container">
            {
            categories.map((item) => (
                <Link to={`/category/${item}`} key={item} className='nav-link'>
                {item}
                </Link>
            ))
            }
        </div>
    </div>
  )
}



export default Header