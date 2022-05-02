import '../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import {Btn, Header} from '../сomponents/basic';
import {MovieCard, EmptyMovieCard} from '../сomponents/movies';
import Spinner from '../сomponents/spinner'
import movieLogo from '../img/img.png'

const getData = async (page) => {
  const newData = await fetch('/getMovies', {
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      page: page
    })

  })
      .then(res => res.json())
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


const AllMovies = (props)=>{ 
  const [item, setItem] = useState([])

  useEffect(()=>{
    let mounted = true;
    getData(props.page).then(items => {
        if(mounted) {
          setItem(items)
        }
      })
    return () => mounted = false;
  },[props.page]
  )

  const onDelete = async(id) =>{
    const newData = await fetch('/deleteMovie', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: id,
      })
    })
        .then(res => res.json())
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
       : 
      
        item.map( i => <MovieCard key={i.id} movie={i} onDelete={(id)=>{onDelete(id)}}/> )
     }
    </>
  )
}

const FoundMovies = (props)=>{
  const [item, setItem] = useState([])

  useEffect(()=>{
    let mounted = true;
    getByName(props.name).then(items => {
        if(mounted) {
          setItem(items)
        }
      })
    return () => mounted = false;
  },[props.name]
  )

  const onDelete = async(id) =>{
    const newData = await fetch('/deleteMovie', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: id,
      })
    })
        .then(res => res.json())
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
       : 
      
        item.map( i => <MovieCard key={i.id} movie={i} onDelete={(id)=>{onDelete(id)}}/> )
     }
    </>
  )
}

const Films = ()=>{
  const [message, updateMessage] = useState([''])
  const [printType, setPrintType] = useState(pTypes.all)
  const [pageNumber, setPage] = useState(1)
  const [foundName, setFoundName] = useState('')

  useEffect(()=>{
    },[printType, pageNumber]
  )

const describeHeader = {
  title: 'Фильмография',
  placeholder: 'название'
}


    return(
      <>
        <Header describe={describeHeader} 
        clickAdd={()=>{setPrintType(pTypes.empty)}}
        clickFind={()=>{
          const inputValue = document.getElementsByName("search")[0].value
          setFoundName(inputValue)
          setPrintType(pTypes.find); }}>
          
          </Header>
        <div className="App">
          <div className='flex'>
            <Btn white text ="1" onClick={()=> {setPage(1)
            setPrintType(pTypes.all)}}/>
            <Btn white text ="2" onClick={()=> {setPage(2)
            setPrintType(pTypes.all)}}/>
            <Btn white text ="3" onClick={()=> {setPage(3)
            setPrintType(pTypes.all)}}/>
            <Btn white text ="4" onClick={()=> {setPage(4)
            setPrintType(pTypes.all)}}/>
          </div>
       

         <h1 className='warning'>{message}</h1>
          {printType === pTypes.find ? <FoundMovies name={foundName}/> :
           printType === pTypes.empty ? <EmptyMovieCard /> :
           <AllMovies page={pageNumber} />} 
         </div>
      </>
    )
  }




  
  export default Films