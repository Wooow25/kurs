import './css/basic.scss';
import React, { useState } from 'react'
import {Btn, Input} from './basic'
import movieLogo from '../img/img.png'
import newMovie from '../img/new.png'

export const MovieCard = (props) => {
    const [movie, setMovie] = useState({id: props.id, namee: props.namee, genre: props.genre, duration: props.duration, age:props.age, unpackKey:props.unpackKey })

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
            <img className='movie-logo' src={movieLogo}></img>
            <div className='flex-column'> 
                <Input text="Жанр" type="text" name="genre"  onChange={(e)=>{setInput(e)}} value={movie.genre}></Input>
                <Input text="Название" type="text" name="namee"  onChange={(e)=>{setInput(e)}}value={movie.namee}></Input>
                <Input text="Продолжительность  (мин.)" type="number" name="duration" onChange={(e)=>{setInput(e)}}value={movie.duration}></Input>
                <Input  text="Возpастное ограничение" type="number" name="age" onChange={(e)=>{setInput(e)}} value={movie.age}></Input>
                <Input text="Ключ распаковки" type="text" name="unpackKey" onChange={(e)=>{setInput(e)}} value={movie.unpackKey}></Input>
            </div>
            
            <div className='flex-column'>  
                <Btn text ="Изменить" onClick={()=> alert('Изменить')}  />
                <Btn text ="Найти договор" onClick={()=> alert('Найти договор')}  />
                <Btn text ="Удалить" onClick={()=> alert('Удалить')}  />
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