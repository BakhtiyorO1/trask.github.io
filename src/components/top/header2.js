import React from 'react'
import './Header2.css'
import HeaderC from './carusel header/headerc'
import Button from 'react-bootstrap/Button';
import {MdOutlineDownloadForOffline} from 'react-icons/md'
export default function header2() {
  return (
    <>
        <div className='Header2-2'>
        <div className='Header2-2-1'>
        <div className='Header2-2-rightside'>
            <img src="https://mytrask.ru/wp-content/uploads/2022/11/trask2.svg" alt=""/>
          </div>
          <div className='Header2-2-leftside'>
            <p className='Header2-2-leftside-p1'>
            Нужна касса по 53-ФЗ?
            </p>
            <h1>
            Включите её в приложении и отображайте QR-чеки
            </h1>
            <p className='Header2-2-leftside-p2'>
            Касса в Trask:
            </p>
                <ul>
                    <li>Позволит принимать платежи через QR</li>
                    <li>Не требует наличия кассовой ленты</li>
                    <li>Не виснет и не ломается</li>
                    <li>Её не надо обслуживать</li>
                </ul>
              <div className='idfcwit'>
                <div className='icon-of-idfcwit'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9.71899V13.1901" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.5791 2.26235L1.55382 18.8932C1.40941 19.1593 1.33325 19.4613 1.33301 19.7687C1.33277 20.0762 1.40846 20.3783 1.55246 20.6447C1.69646 20.9111 1.9037 21.1323 2.15332 21.2861C2.40294 21.4399 2.68613 21.5209 2.97441 21.5209H21.0249C21.3132 21.5209 21.5964 21.4399 21.846 21.2861C22.0957 21.1323 22.3029 20.9111 22.4469 20.6447C22.5909 20.3783 22.6666 20.0762 22.6663 19.7687C22.6661 19.4613 22.5899 19.1593 22.4455 18.8932L13.4203 2.26235C13.2761 1.99666 13.0689 1.77608 12.8196 1.62274C12.5703 1.46939 12.2875 1.38867 11.9997 1.38867C11.7119 1.38867 11.4291 1.46939 11.1798 1.62274C10.9304 1.77608 10.7233 1.99666 10.5791 2.26235V2.26235Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.0003 18.7437C12.7367 18.7437 13.3337 18.122 13.3337 17.3552C13.3337 16.5884 12.7367 15.9668 12.0003 15.9668C11.2639 15.9668 10.667 16.5884 10.667 17.3552C10.667 18.122 11.2639 18.7437 12.0003 18.7437Z" fill="currentColor"></path>
                        </svg>
                </div>
                <p>
                Все данные хранятся локально. Вы сами выбираете какие сделки отправлять в ФНС. 
                </p>
              </div>
          </div>
          
        </div>
      </div>
      <div className='Header2-3'>
        <div className='Header2-3-1'>
          <div className='Header2-3-leftside'>
            <p className='Header2-3-leftside-p1'>
            Принимайте карты
            </p>
            <h1>
            Хотите максимум?
            </h1>
            <p className='Header2-3-leftside-p2'>
            Подключите терминал Vendista, чтобы
            </p>
            <ul>
                <li>Экономить на эквайринге от 5 000 ₽ в мес. за счет низкой ставки – 1.1%</li>
                <li>Принимать к оплате карты</li>
                <li>Отображать информацию клиенту на втором экране</li>
                <li>Включить оценку клиентом качества работы</li>
            </ul>
              <div className='button2'>
        <Button variant="success" style={{display:'flex', alignItems:'center'}}><h3><MdOutlineDownloadForOffline/></h3><h5>Узнать больше</h5></Button>
        </div>
          </div>
          <div className='Header2-3-rightside'>
            <img src="https://mytrask.ru/wp-content/uploads/2022/11/acquiring.png" alt=""/>
          </div>
        </div>
      </div>
      
    </>
  )
}