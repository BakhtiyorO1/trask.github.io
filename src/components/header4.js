import React from 'react'
import {MdOutlineDownloadForOffline} from 'react-icons/md'
import './header4.css'
export default function header4() {
  return (
    <div className='header4-body'>
        <div className='header4-container'>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1955.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>Сломалась касса?</p>
                    <p>Установите приложение на любой телефон или планшет и продолжайте работать.</p>
                </div>
            </div>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1955-1.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>Пиковая нагрузка?</p>
                    <p>Добавьте еще кассиров, установив приложение на телефон любого сотрудника.</p>
                </div>
            </div>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1954.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>Не хотите платить за обслуживание?</p>
                    <p>Обслуживать кассу не придётся. Она работает очень быстро, не зависает, не требует специальной настройки. Кассовая лента тоже не нужна.</p>
                </div>
            </div>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1953.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>В чем подвох и почему это бесплатно?</p>
                    <p>Мы не берём деньги с первых трёх торговых точек, так поддерживаем малый бизнес. Каждая последующая будет стоить всего 500 ₽ в мес.</p>
                </div>
            </div>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1950.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>Это безопасно?</p>
                    <p>Все данные хранятся только у вас. Приложение работает локально на ваших устройствах. Вы сами решаете что отправлять в ФНС или куда угодно.</p>
                </div>
            </div>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1951.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>Это надежно?</p>
                    <p>Работает даже если нет интернета. Чеки уйдут как только появится связь.</p>
                </div>
            </div>
            <div className='header4-1'>
                <img src="https://mytrask.ru/wp-content/uploads/2022/11/Group-1952.svg" alt=""/>
                <div className='header4-1-p'>
                    <p className='header4-1-p-1'>Хотите принимать платежи картами?</p>
                    <p>Одна кнопка в приложении и уже завтра мы отправим терминал в любую точку РФ. Принимает карты МИР, VISA/MC, MirPay, СБП, Плати-QR.</p>
                </div>
            </div>
            <div className='button'>
                <button><h3><MdOutlineDownloadForOffline/></h3><h5>Скачать TRASK</h5></button>
            </div>
        </div>
    </div>
  )
}
