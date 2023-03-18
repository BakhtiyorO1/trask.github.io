import React from 'react'
import './header-hover.css'
export default function Headerhover() {
  return (
    <div className='Teck-uses-body'>
        <div className='Teck-uses'>
            <h1>TRASK используют</h1>
        </div>
        <div className='Teck-uses-1'>
          <a href="#" style={{marginBottom:30,marginRight:30}}>
            <div className='Teck-uses-1-1'>
              <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1979.svg" alt=""/>
                <p>Магазины и торговые точки</p>
            </div>
          </a>
          <a href="#" style={{marginBottom:30}}>
            <div className='Teck-uses-1-1'>
              <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1916.svg" alt=""/>
                <p>Заведения общепита и еды на вынос</p>
            </div>
          </a>
          <a href="#" style={{marginBottom:30,marginLeft:30}}>
            <div className='Teck-uses-1-1'>
              <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1918.svg" alt=""/>
                <p>Небольшие производства</p>
            </div>
          </a>
        </div>
        <div className='Teck-uses-2'>
          <a href="#" style={{marginTop:30,marginRight:30}}>
            <div className='Teck-uses-1-1'>
              <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1920.svg" alt=""/>
                <p>Салоны услуг</p>
            </div>
          </a>
          <a href="#" style={{marginTop:30}}>
            <div className='Teck-uses-1-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1914.svg" alt=""/>
                  <p>Самозанятые и специалисты </p>
            </div>
          </a>
          <a href="#" style={{marginTop:30,marginLeft:30}}>
            <div className='Teck-uses-1-1'>
              <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1913-1.svg" alt=""/>
                <p>Бары и кальянные</p>
            </div>
          </a>
        </div>
    </div>
  )
}
