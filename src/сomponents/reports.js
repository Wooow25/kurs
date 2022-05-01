import './css/basic.scss';
import React, { useState, useEffect} from 'react'
import {Btn, Input, Select} from './basic'

const titleTypes = ['за день','за неделю','за месяц','нестандартный'];


export const NewReport = (props) => {
    const [report, setReport] = useState({...props.movie})

    const setInput = (e) =>{
      const {name, value} = e.target;
      if(name === 'contraact' ){
        setReport(prevState => ({
          ...prevState,
          [name]: parseInt(value)
        }))
        return;
      }
      if(name === 'period1' || name === 'period2'){
        setReport(prevState => ({
          ...prevState,
          ['periood']: value
        }))
        return;
      }
      setReport(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
   
    return(
         <div className='movie-card flex'>
            <div className='flex-column'> 
                <Input text="№ Договора" type="number" name="сontraact"  onChange={(e)=>{setInput(e)}} ></Input>
                <Input text="с (дата)" type="date" name="period1"  onChange={(e)=>{setInput(e)}} ></Input>
                <Input text="по (дата)" type="date" name="period2" onChange={(e)=>{setInput(e)}}></Input>
                <Select text ="Вид отчетности" options={titleTypes}></Select>
            </div>
            
             <div className='flex-column'>  
                <Btn text ="Рассчитать" onClick={()=> alert('готово')}  />
            </div>

        </div> 
    ) 
}

