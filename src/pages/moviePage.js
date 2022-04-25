import '../App.css';
import React, { useState, useEffect } from 'react';
import {Btn, Header} from '../сomponents/basic';
import {MovieCard, EmptyMovieCard} from '../сomponents/movies';
import Spinner from '../сomponents/spinner'
import movieLogo from '../img/img.png'

const getData = async () => {
  const newData = await fetch('/getMovies', {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
      .then(res => res.json())
  console.log(newData);
  return newData
}

const getByName = async (namee) => {
  const newData = await fetch('/getMovieByName', {
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      namee: namee
    })
  })
      .then(res => res.json())
  console.log(newData);
  if(newData.length ===0 ){
    return;
  }
  return newData;
}

const pTypes = {
  all:'all',
  empty: 'empty',
  find: 'find'
}


const Container = (Component)=>{
  const [item, setItem] = useState([])
  const [printType, setPrintType] = useState([pTypes.all])
  useEffect(()=>{
    let mounted = true;
    getData().then(items => {
        if(mounted) {
          setItem(items)
        }
      })
    return () => mounted = false;
  },[]
  )

  const onDelete = async(id) =>{
    const newData = await fetch('/deleteMovie', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })
        .then(res => res.json())
    console.log(newData);
    if(newData.length ===0 ){
      return;
    }
    setItem(newData) ;
  }

  return(
    <>
     {
       item.length ===0 ? 
       <div className='center'>
        <Spinner size='large'/>
        </div>
       : printType === pTypes.empty ? {

       } : printType === pTypes.find ? {

       } :
      
        item.map(i => <MovieCard key={i.id} movie={i} onDelete={(id)=>{onDelete(id)}}  />
           )
     }
    </>
  )
}



const Films = ()=>{
  const [message, updateMessage] = useState([''])
      const [printType, setPrintType] = useState(['all'])


    return(
      <>
        <Header title='Фильмография'></Header>
        <div className="App">
         <h1 className='warning'>{message}</h1>
          <Container/>
         </div>
      </>
    )
  }




  
  export default Films