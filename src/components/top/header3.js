import React from 'react'
import './header3.css'
export default function Header3() {
  return (
    <div className='Header3-body'>
      <div className='Header3-Teck-uses-body'>
        <div className='Header3-Teck-uses'>
            <h1>До 3 торговых точек — всё беслатно:</h1>
        </div>
        <div className='Header3-Teck-uses-1'>
          <a href="#" style={{marginBottom:30,marginRight:30}}>
            <div className='Header3-Teck-uses-1-1'>
                <span className='Header3-Teck-uses-1-1-ziro'><strong>0</strong></span>
                <span><strong>₽</strong></span>
                <p>Магазины и торговые точки</p>
            </div>
          </a>
          <a href="#" style={{marginBottom:30}}>
            <div className='Header3-Teck-uses-1-1'>
                <span className='Header3-Teck-uses-1-1-ziro'><strong>0</strong></span>
                <span><strong>₽</strong></span>
                <p style={{width:'auto'}}>Заведения общепита и еды на вынос</p>
            </div>
          </a>
          <a href="#" style={{marginBottom:30,marginLeft:30}}>
            <div className='Header3-Teck-uses-1-1'>
                <span className='Header3-Teck-uses-1-1-ziro'><strong>0</strong></span>
                <span><strong>₽</strong></span>
                <p>Небольшие производства</p>
            </div>
          </a>
        </div>
        <p className='Header3-body-l-p'>Затем каждая последующая торговая точка всего за <span>500 ₽ в мес.</span></p>
    </div>
    
    </div>
  )
}
