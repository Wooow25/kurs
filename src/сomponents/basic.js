import './css/basic.scss';
import React, { useState,useEffect} from 'react'

import {
    Link
  } from "react-router-dom";

export const Btn = (props) => {
    return(
        <>
            <button className={props.white ? 'btn-white' : 'btn'} onClick = { ()=> props.onClick()}>{props.text}</button>
        </>
    )
}

export const Header = (props) => {
    const {title, placeholder} = props.describe
    return(
        <>
        
            <header className='header'>
                <div className='flex-search'>

                {props.menu ? <h1 className='menu-title'>Меню</h1> : 
                <>
                     <div className='flex'>
                        <h1 className='menu-title'>{title || "test" }</h1>
                       <Btn white text='Создать' onClick = {()=>props.clickAdd()} />
                    </div>
                    <div className='flex-search'>
                        <div className='input-wrapper'>  
                        <p className='input-label-search'>Поиск элемента</p>
                        <input  className='input-search' name="search" placeholder={`Введите ${placeholder || 'что-то'}`} ></input>
                    </div>
                        <Btn text='Найти' white onClick = {()=>props.clickFind()} />
                        <Link to="/"><Btn text='Меню' white /></Link>
                        
                    </div>
                </>
                }

                </div>
            </header>
        </>
    )
}

export const Input = (props) =>{
    useEffect(()=>{

    },[props.value])
    return(
        <div className='input-wrapper' hidden={props.hidden}>  
        <p className='input-label'>{props.text}</p>
        <input className='input' type={props.type || "text"} name={props.name} placeholder={props.placeholder} 
        defaultValue={props.value} onChange={props.onChange} disabled={props.disabled}/>
        </div>
    )
}

export const Select = (props) =>{
    return(
        <div className='input-wrapper' >  
            <p className='input-label'>{props.text}</p>
            <select className='input' onChange={props.onChange} name={props.name}>
                {props.options.map((opt, index)=> <option key={index}>{opt}</option>)}
            </select>
        </div>
    )
}

export const Label = (props) =>{
    return(
        <div className='input-wrapper' hidden={props.hidden}>  
            <span className='input-label'>{props.text}</span>
            <span className='label-text'>{props.value}</span>
        </div>
    )
}