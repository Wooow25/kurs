import React, { useState, useEffect } from 'react';
import {Btn, Header} from '../сomponents/basic';
import hello from '../img/hello.png'


const Menu = ()=>{
    return(
      <>
          <Header title='Меню' menu/>
        <div className='flex'>
          <div className='flex-column half'> 
            <Btn text ="Фильмография" onClick={()=> alert("Фильмография")}  />
            <Btn text ="Договоры" onClick={()=> alert("Договоры")}  />
            <Btn text ="Отчеты" onClick={()=> alert("Отчеты")}  />
            <Btn text ="Прокатчики" onClick={()=> alert("Прокатчики")}  />
          </div>
            <img className='menu-image' src={hello}></img>
        </div>
      </>
    )
}


export default Menu