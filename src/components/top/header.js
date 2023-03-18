import React from 'react'
import './header.css'
import HeaderC from './carusel header/headerc'
import Button from 'react-bootstrap/Button';
import {MdOutlineDownloadForOffline} from 'react-icons/md'
export default function Header() {
  return (
    <>
      <div className='Header'>
        <h1>
        <p>
        Всё, что нужно малому бизнесу – бесплатно и прямо сейчас
        </p>
        </h1>
        <div className='button'>
        <Button variant="success"><h3><MdOutlineDownloadForOffline/></h3><h5>Скачать TRASK</h5></Button>
        </div>
        <div className='priyom'>
        <p>Приём платежей. Касса. Учет</p>
        </div>
        <HeaderC/>
      </div>
      <div className='Header2'>
        <div className='Header2-1'>
          <div className='Header2-leftside'>
            <p className='Header2-leftside-p1'>
              КАК ЭТО РАБОТАЕТ?
            </p>
            <h1>
            Установите TRASK на любой планшет и телефон
            </h1>
            <p className='Header2-leftside-p2'>
            Сразу же после установки вы сможете:
            </p>
              <ul>
                <li>Принимать наличные</li>
                <li>Быстро считать сумму чека</li>
                <li>Вести учёт товаров и денег</li>
                <li>Использовать систему лояльности</li>
              </ul>
              <div className='button2'>
        <Button variant="success" style={{display:'flex', alignItems:'center'}}><h3><MdOutlineDownloadForOffline/></h3><h5>Скачать TRASK</h5></Button>
        </div>
          </div>
          <div className='Header2-rightside'>
            <img src="https://mytrask.ru/wp-content/uploads/2022/11/install.png" alt=""/>
          </div>
        </div>
      </div>
      
    </>
  )
}
