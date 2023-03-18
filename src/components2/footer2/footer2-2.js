import React from 'react'
import {ImTelegram} from 'react-icons/im'
import {TfiYoutube} from 'react-icons/tfi'
import {SlSocialVkontakte} from 'react-icons/sl'
import {AiOutlineApple} from 'react-icons/ai'
import {AiFillAndroid} from 'react-icons/ai'
import "./footer2-2.css"
export default function Footer22() {
  return (
    <div className='footer-body'>
        <div className='footer-container'>
              <div className='footer-container-top'>
                  <img src="https://mytrask.ru/wp-content/uploads/2022/11/logo_white.svg" alt=""/>
                  <p>© 2022 Trask. <br/>ИП Шарипов Руслан Налиевич</p>
                  <p><a href="#" className='footer-container-top-a'>Политика конфиденциальности</a></p>
                <div className='footer-container-top-icons'>
                    <div className='footer-container-top-icons1'>
                      <SlSocialVkontakte/>
                    </div>
                    <div className='footer-container-top-icons1'>
                      <ImTelegram/>
                    </div>
                    <div  className='footer-container-top-icons1'>
                      <TfiYoutube/>
                    </div>
                </div>
                <div className='footer-container-top-buttons'>
                  <button><p>Скачать для IOS</p> <AiOutlineApple/></button>
                  <button style={{width: 190,}}><p>Скачать для Android</p> <AiFillAndroid/></button>
                </div>
            </div>
            <div className='footer-container-bottom'>
              <p>Создание сайта 
                <a href="https://korolev.digital/" target={'_blank'}>Korolev Digital</a>
              </p>
            </div>
        </div>
    </div>
  )
}