
import './App.css';
import React, { useState, useEffect } from 'react';
import {Btn, Header} from './сomponents/basic';
//import { Movie } from '../dbFiles/classes';
import Spinner from './сomponents/spinner'
import Films from './pages/moviePage'
import Menu from './pages/menuPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const LoadPage = (props) =>{
  return(
    <div className='App'>
      <h1>{props.title}</h1>
      <Spinner size='large'/>
    </div>
  )
}


function App() {
  return (
    <>
     
 
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path='/movies' element={<Films/>}/>
            <Route path='/contract' element={<LoadPage title='Контракты'/>}/>
            <Route path='/reports' element={<LoadPage title='Отчеты'/>}/>
            <Route path='/distributor' element={<LoadPage title='Прокатчик'/>}/>
          </Routes>
          </BrowserRouter>
     
   
      

    </>
  );
}

export default App;
