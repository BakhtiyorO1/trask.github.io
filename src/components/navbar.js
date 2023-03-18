import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar-body'>
        <div className='navbar-body-container'>
            <div className='navbar-body-img'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/logo.svg" alt=""/>
            </div>
            <div className='navbar-body-ulmenu'>
                <ul>
                    <li className='borderbottom'><Link to={'/body1'}><strong>Главная страница</strong></Link></li>
                    <li><Link to='/body2'><strong>О нас</strong></Link></li>
                    <li><Link to={'/body3'}><strong>Возможности</strong></Link></li>
                    <li><a href="#"><strong>Сферы применения</strong></a></li>
                    <li><a href="#"><strong>Отзывы</strong></a></li>
                    <li><a href="#"><strong>Контакты</strong></a></li>
                </ul>
            </div>
            <div  className='navbar-body-freebox'>
                
            </div>
        </div>
    </div>
  )
}
