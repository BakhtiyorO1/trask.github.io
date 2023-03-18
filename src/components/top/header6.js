import React from 'react'
import {MdOutlineDownloadForOffline} from 'react-icons/md'
import './header6.css'
import { Link } from 'react-router-dom'
export default function header6() {
  return (
    <div className='header6-body'>
      <div className='text-button'>
        <h1>
          Лучшее кассовое решение
          <br/>
          для вашего бизнеса
        </h1>
        <div className='button' style={{marginTop:'50px'}}>
                <button><h3><MdOutlineDownloadForOffline/></h3><h5>Скачать TRASK</h5></button>
            </div>
      </div>
      <div className='Header6-ul-li'>
        <ul>
          <li><Link to={'/body2'}>О нас</Link></li>
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
