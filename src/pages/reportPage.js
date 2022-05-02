
import {NewReport, Report} from '../сomponents/reports'
import React, { useState, useEffect, useCallback } from 'react';
import {Btn, Header, } from '../сomponents/basic';


const pTypes = {
    all:'all',
    empty: 'empty',
    find: 'find'
  }

const Reports = ()=>{
    const [printType, setPrintType] = useState(pTypes.all);
    const [foundNum, setFoundNum] = useState('');
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
                setFoundNum(inputValue)
                setPrintType(pTypes.find); }}>
          
          </Header>
        <div className="App">
        </div>

    <NewReport/>

    </>
    )
}



export default Reports