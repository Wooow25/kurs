import './css/basic.scss';
import React, { useState } from 'react'
import {Btn, Input} from './basic'
import movieLogo from '../img/img.png'
import newMovie from '../img/new.png'

export const MovieCard = (props) => {
    const [movie, setMovie] = useState({...props.movie})

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

    const updateData = async (movie) => {
      const newData = await fetch('/updateMovie', {
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
      console.log(newData);
      return newData
    }
   
    return(
         <div className='movie-card flex' id={movie.id}>
            <img className='movie-logo' src={movieLogo}></img>
            <div className='flex-column'> 
                <Input text="Жанр" type="text" name="genre"  onChange={(e)=>{setInput(e)}} value={movie.genre}></Input>
                <Input text="Название" type="text" name="namee"  onChange={(e)=>{setInput(e)}}value={movie.namee}></Input>
                <Input text="Продолжительность  (мин.)" type="number" name="duration" onChange={(e)=>{setInput(e)}}value={movie.duration}></Input>
                <Input  text="Возpастное ограничение" type="number" name="age" onChange={(e)=>{setInput(e)}} value={movie.age}></Input>
                <Input text="Ключ распаковки" type="text" name="unpackKey" onChange={(e)=>{setInput(e)}} value={movie.unpackKey}></Input>
            </div>
            
             <div className='flex-column'>  
                <Btn text ="Изменить" onClick={()=> updateData(movie)}  />
                <Btn text ="Найти договор" onClick={()=> alert('Найти договор')}  />
                <Btn text ="Удалить" onClick={()=> props.onDelete(movie.id)}  />
            </div>

        </div> 
    ) 
}

export const EmptyMovieCard = (props) => {
    const [movie, setMovie] = useState({namee: '', genre: '', duration: 0, age: 0, unpackKey: '' })

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
    return(
        <div className='movie-card flex'>
            <img className='movie-logo' src={newMovie}></img>
            <div className='flex-column'> 
                <Input text="Жанр" type="text" name="genre"  onChange={setInput} ></Input>
                <Input text="Название" type="text" name="namee"  onChange={setInput} ></Input>
                <Input text="Продолжительность  (мин.)" type="number" name="duration" onChange={setInput}></Input>
                <Input  text="Возpастное ограничение" type="number" name="age" onChange={setInput}></Input>
                <Input text="Ключ распаковки" type="text" name="unpackKey" onChange={setInput}></Input>
            </div>
            
            <div className='flex-column'>  
                <Btn text ="Создать" onClick={()=> alert('Создано')}  />
            </div>

        </div>
    ) 
}