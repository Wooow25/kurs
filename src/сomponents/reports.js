import './css/basic.scss';
import React, { useState, useEffect} from 'react'
import {Btn, Input, Select, Label} from './basic'

const titleTypes = ['за день','за неделю','за месяц','нестандартный'];

const getCurrentDate =() =>{
    let today = new Date().toLocaleDateString('ru')
    return today
}

export const Report = (props) => {
    const [report, setReport] = useState({...props.report})
    const createReport = async () => {
        console.log(`data from inputs:`)
        console.log(report)
        await fetch('/createReport', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
            body: JSON.stringify({
              ...report
            })
           
        })
        .then(res => res.json())
        alert('Создано')
      }
   
    return(
        <div className='card' hidden={props.hidden}>
            <div > 
                <Label text="№ Договора" value={report.contraact}  ></Label>
                <Label text="Период" value={report.periood}  ></Label>
                <Label text="Вид" value={report.title}></Label>
                <Label text="Дата создания" value={report.creationDate }  ></Label>
            </div>
    
            <div > 
                <Label text="Количество сеансов" value={report.sessionAmount }  ></Label>
                <Label text="Проданные билеты" value={report.ticketAmount}  ></Label>
                <Label text="Сумма выручки" value={report.revenue}></Label>
            </div>
      
            <div>
                    {props.new ? 
                    <Btn text ="Сохранить" onClick={()=> createReport()}  /> : 
                    <Btn text ="Отправить прокатчику" onClick={() => alert('Отправлено')}  />
                    }
            </div> 

        </div> 
     
    ) 
}


export const NewReport = (props) => {
    const [report, setReport] = useState({contraact: 0, period1:'01-01-01', period2:'02-02-02', title:'нестандартный', })
    const [generated, setGenerated] = useState({status:false, value: {contraact:-1, periood:'', title:'', creationDate: getCurrentDate(), sessionAmount:-1, ticketAmount:-1, revenue:-1 }})
    useEffect(()=>{
        setGenerated({status:false, value: {contraact:report.contraact, periood:`${report.period1}-${report.period1}`, title:report.title, creationDate: getCurrentDate(), sessionAmount: -1, ticketAmount:-1, revenue:-1 }})
    },[report])
    const setInput = (e) =>{
        setGenerated(prevState => ({
            ...prevState,
            status: false
          }))
      const {name, value} = e.target;
      if(name === 'contraact' ){
        setReport(prevState => ({
          ...prevState,
          contraact: parseInt(value)
        }))
        return;
      }
      setReport(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

    const calculateReport = async () => {
        const newData = await fetch('/calculateReport', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            report: report
          })
        })
            .then(res => res.json())
        console.log(newData);
        return newData
      }
   
    return(
        <>
            <div className='card'>
                <div className='flex-column'> 
                    <Input text="№ Договора" type="number" name="contraact"  onChange={(e)=>{setInput(e)}} ></Input>
                    <Input text="с (дата)" type="date" name="period1"  onChange={(e)=>{setInput(e)}} ></Input>
                    <Input text="по (дата)" type="date" name="period2" onChange={(e)=>{setInput(e)}}></Input>
                    <Select text ="Вид отчетности" name="title" options={titleTypes} onChange={(e)=>{setInput(e)}} ></Select>
                </div>
                
                <div className='flex-column'>  
                    <Btn text ="Рассчитать" onClick={async ()=> {
                            const calculation = await calculateReport();
                            setGenerated({status:true, value: {contraact:report.contraact, periood:`${report.period1} - ${report.period2}`, title:report.title, creationDate: getCurrentDate(), sessionAmount: calculation.sessionAmount , ticketAmount: calculation.ticketAmount , revenue: calculation.revenue }})
   
                        }
                       
                        }  />
                </div>
 
            </div> 
            { generated.status ? <Report new report={generated.value} /> : <span>Здесь будет сгенерированный отчет</span> } 
        </>
    ) 
}