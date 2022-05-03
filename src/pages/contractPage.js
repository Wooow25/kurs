
import React, { useState, useEffect, useCallback } from 'react';
import {Btn, Header, } from '../сomponents/basic';
import Spinner from '../сomponents/spinner'


const Reports = ()=>{
    const [message, updateMessage] = useState([''])
    const [printType, setPrintType] = useState(pTypes.all);
    const [foundId, setFoundId] = useState(1);
    const [pageNumber, setPage] = useState(1)

    const describeHeader = {
        title: 'Договоры',
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

