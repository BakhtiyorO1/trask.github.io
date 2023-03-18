import React from 'react'
import './footer2-1.css'
import { Link } from 'react-router-dom'
export default function footer21() {
  return (
    <div className='header6-bodyy'>
      <div className='Header6-ul-li'>
        <ul>
          <li className='border-bottom-2'><Link to={'/body2'}>О нас</Link></li>
          <li><a href="#">Скачать</a></li>
          <li><a href="#">Возможности</a></li>
          <li><a href="#">Сферы применения</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Сайт разработчика</a></li>
        </ul>
      </div>
    </div>
  )
}
