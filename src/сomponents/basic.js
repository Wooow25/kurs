import './css/basic.scss';
import React, { useState } from 'react'

export const Btn = (props) => {
    return(
        <>
            <button className={props.white ? 'btn-white' : 'btn'} onClick = { ()=> props.onClick()}>{props.text}</button>
        </>
    )
}

export const Header = (props) => {
    return(
        <>
        
            <header className='header'>
                <div className='flex-search'>

                {props.menu ? <h1 className='menu-title'>{props.title}</h1> : 
                <>
                     <div className='flex'>
                        <h1 className='menu-title'>{props.title}</h1>
                       <Btn white text='Создать' onClick = {()=>props.clickAdd()} />
                    </div>
                    <div className='flex-search'>
                        <div className='input-wrapper'>  
                        <p className='input-label-search'>Поиск элемента</p>
                        <input className='input-search' name="search" placeholder='Введите название' ></input>
                    </div>
                        <Btn text='Найти' white onClick = {()=>props.clickFind()} />
                        <Btn text='Меню' white onClick = {()=>props.clickMenu()} />
                    </div>
                </>
                }

                </div>
            </header>
        </>
    )
}

export const Input = (props) =>{
    return(
        <div className='input-wrapper' hidden={props.hidden}>  
        <p className='input-label'>{props.text}</p>
        <input className='input' type={props.type || "text"} name={props.name} placeholder={props.placeholder} 
        defaultValue={props.value} onChange={props.onChange}></input>
        </div>
    )
  
}