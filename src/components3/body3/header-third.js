import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import './header-third.css'
export default function headerthird() {
  return (
    <div>
        <div className='top-headerthird'>
            <div className='top-headerthird2'>
                <div className='top-a'>
                    <Link to={'/'}>Главная</Link>
                    <BsArrowRight/>
                    <p>Возможности</p>
                </div>
            </div>
        </div>

    </div>
  )
}
