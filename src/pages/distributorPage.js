import {Distributor, NewDistributor} from '../сomponents/distributors'
import React, { useState, useEffect, useCallback } from 'react';
import {Btn, Header, } from '../сomponents/basic';
import Spinner from '../сomponents/spinner'



const pTypes = {
    all:'all',
    empty: 'empty',
    find: 'find'
  }

  const getData = async (page) => {
    const newData = await fetch('/getDistributors', {
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
    const newData = await fetch('/getDistributorByName', {
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
      return [] ;
    }
    return newData;
  }



const FoundDistributor  = (props)=>{
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
        const newData = await fetch('/deleteDistributor', {
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
         item.length === 0 ? 
         <div className='center'>
          <Spinner size='large'/>
          </div>
         : 
        
          item.map( i => <Distributor key={i.id} distributor={i} onDelete={(id)=>{onDelete(id)}}/> )
       }
      </>
    )
  }


const AllDistributor = (props)=>{ 
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
    const newData = await fetch('/deleteDistributor', {
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
      
        item.map( i => <Distributor key={i.id} distributor={i} onDelete={(id)=>{onDelete(id)}}/> )
     }
    </>
  )
}

const Distributors = ()=>{
    const [message, updateMessage] = useState([''])
    const [printType, setPrintType] = useState(pTypes.all);
    const [foundName, setFoundName] = useState('');
    const [pageNumber, setPage] = useState(1)

    const describeHeader = {
        title: 'Прокатчики',
        placeholder: 'наименование'
      }
    return (
        <>
        <Header describe={describeHeader} 
            clickAdd={()=>{setPrintType(pTypes.empty)}}
            clickFind={()=>{
                const inputValue = document.getElementsByName("search")[0].value;
                setFoundName(inputValue)
                setPrintType(pTypes.find); }}>
          </Header>


        <div className="App">
            <div className='flex'>
                <Btn white text ="Посмотреть все" onClick={()=> {setPage(1)
                setPrintType(pTypes.all)}}/>
            </div>

            <h1 className='warning'>{message}</h1>
            {printType === pTypes.find ? <FoundDistributor name={foundName}/> :
            printType === pTypes.empty ? <NewDistributor/> :
            <AllDistributor page={pageNumber} />} 
        </div>

    </>
    )
}


export default Distributors
