import React from 'react'
import Navbar from './navbar';
import Header from './top/header';
import Header2 from './top/header2';
import Headerhover from './top/header-hover';
import Header3 from './top/header3';
import Header4 from './header4';
import Header5 from './top/header5';
import Header6 from './top/header6';
import Footer from './bottom/footer';
import './body1.css'
export default function Body1() {
  return (
    <div>
        <div className='navbar-app'>
      <Navbar/>
      </div>
      <Header/>
      <Header2/>
      <Headerhover/>
      <Header3/>
      <Header4/>
      <Header5/>
      <Header6/>
      <Footer/>
    </div>
  )
}
