
import {NewReport, Report} from '../сomponents/reports'
import React, { useState, useEffect, useCallback } from 'react';
import {Btn, Header, } from '../сomponents/basic';
import Spinner from '../сomponents/spinner'


const pTypes = {
    all:'all',
    empty: 'empty',
    find: 'find'
  }


  const AllReports = (props)=>{ 
    const [item, setItem] = useState([])
    const getData = async (page) => {
        const newData = await fetch('/getReports', {
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
    return(
      <>
       {
         item.length ===0 ? 
         <div className='center'>
          <Spinner size='large'/>
          </div>
         : 
        
          item.map( i => <Report key={i.id} report={i} /> )
       }
      </>
    )
  }

  const FoundReports = (props)=>{
    const [item, setItem] = useState([])

    const getReportByContract = async (id) => {
        const newData = await fetch('/getReportByContract', {
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
        if(newData.length ===0 ){
          return;
        }
        return newData;
      }
  
    useEffect(()=>{
      let mounted = true;
      getReportByContract(props.id).then(items => {
          if(mounted) {
            setItem(items)
          }
        })
      return () => mounted = false;
    },[props.id]
    )
  
  
  
    return(
      <>
       {
         item.length ===0 ? 
         <div className='center'>
          <Spinner size='large'/>
          </div>
         : 
        
          item.map( i => <Report key={i.id} report={i}/> )
       }
      </>
    )
  }

const Reports = ()=>{
    const [message, updateMessage] = useState([''])
    const [printType, setPrintType] = useState(pTypes.all);
    const [foundId, setFoundId] = useState(1);
    const [pageNumber, setPage] = useState(1)

    const describeHeader = {
        title: 'Отчеты',
        placeholder: '№ договора'
      }
    return (
        <>
        <Header describe={describeHeader} 
            clickAdd={()=>{setPrintType(pTypes.empty)}}
            clickFind={()=>{
                const inputValue = document.getElementsByName("search")[0].value;
                setFoundId(parseInt(inputValue))
                setPrintType(pTypes.find); }}>
          </Header>


        <div className="App">
            <div className='flex'>
                <Btn white text ="Посмотреть все" onClick={()=> {setPage(1)
                setPrintType(pTypes.all)}}/>
            </div>

            <h1 className='warning'>{message}</h1>
            {printType === pTypes.find ? <FoundReports id={foundId}/> :
            printType === pTypes.empty ? <NewReport/> :
            <AllReports page={pageNumber} />} 
        </div>

    </>
    )
}



export default Reports