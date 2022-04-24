
import './App.css';
import React, { useState, useEffect } from 'react';
import {Btn, Header} from './сomponents/basic';
import hello from './img/hello.png'
//import { Movie } from '../dbFiles/classes';
import Spinner from './сomponents/spinner'
import Films from './pages/moviePage'
import Menu from './pages/menuPage'







function App() {
  const [returnedData, setReturnedData] = useState(['Hiiiiiiii'])
  const [message, updateMessage] = useState([''])
  const [movie, setMovie] = useState({namee:'', genre:'', duration:0, age:0, unpackKey:'' })

  const setInput = (e) =>{
    const {name, value} = e.target;
    if(name === 'duration' || name ==='age'){
      setMovie(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }))
      return;
    }
    setMovie(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const getByName = async () => {
    if(movie.namee !== ''){
      const newData = await fetch('/getByName', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          namee: movie.namee
        })
      })
          .then(res => res.json())
      console.log(newData);
      if(newData.length ===0 ){
        updateMessage('nothing found')
        return;
      }
      setReturnedData(newData[0])
      updateMessage('')
    }
    else{
      updateMessage(`PRINT NAME! current:${movie.namee}`);
    }
  }



  const postData = async () => {
    console.log(`data from inputs:`)
    console.log(movie)
    const newData = await fetch('/createMovie', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: JSON.stringify({
          ...movie
        })
      
    })
        .then(res => res.json())
    console.log(`response from server: ${newData.namee}`);
    console.log(newData);
  }




  return (
    <>
      {/* <Header title='тест' new='true'/>
      <div className="App">
       <Menu/>
       </div> */}

        
     { /* 
         <h1 className='warning'>{message}</h1>
        <input type="text" name="namee" placeholder="Название" onChange={setInput}></input>
        <input type="text" name="genre" placeholder="Жанр" onChange={setInput}></input>
        <input type="number" name="duration" placeholder="Продолжительность (мин.)" onChange={setInput}></input>
        <input type="number" name="age" placeholder="Воpастное ограничение" onChange={setInput}></input>
        <input type="text" name="unpackKey" placeholder="Ключ распаковки" onChange={setInput}></input>
        <button onClick = { ()=> getData()}>getMovies</button>
        <button onClick = { ()=> getByName()}>getByName</button>
        <button onClick = { ()=> postData()}>Create</button>
        <Btn text ="Договоры" onClick={()=> getData()}  />
          <p>Movie: {returnedData.namee}</p>
          <p>age: {returnedData.age}</p>
          <p>duration: {returnedData.duration}</p> */}
     


     
      <Header title='Договоры' new='true'/>
    
      

    </>
  );
}

export default App;
