import React, { useState, useEffect } from 'react';
import {Btn, Header} from '../сomponents/basic';
import hello from '../img/hello.png'
import {
  Link
} from "react-router-dom";


const describeHeader = {
  title: 'Меню',
}

const Menu = ()=>{
    return(
      <>
          <Header describe={describeHeader}  menu/>
        <div className='flex'>
          <div className='flex-column half'> 
          <Link to="/movies"><Btn text ="Фильмография" /></Link>
          <Link to="/contract"><Btn text ="Договоры" /></Link>
          <Link to="/reports"><Btn text ="Отчеты" /></Link>
          <Link to="/distributor"><Btn text ="Прокатчики" /></Link>
          
          </div>
            <img className='menu-image' src={hello}></img>
        </div>
      </>
    )
}


export default Menu