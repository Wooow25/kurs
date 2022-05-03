import './css/basic.scss';
import React, { useState, useEffect} from 'react'
import {Btn, Input, Select, Label} from './basic'


export const Distributor = (props) => {
    
    const setInput = (e) =>{
        const {name, value} = e.target;
        setDistributor(prevState => ({
          ...prevState,
          [name]: value
        }))
      }
    
      const updateData = async () => {
        const newData = await fetch('/updateDistributor', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...distributor
          })
        })
            .then(res => res.json())
        console.log(newData);
        return newData
      }

      const findContracts = async () => {
        const newData = await fetch('/findActiveContracts', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            id: distributor.id
          })
        })
            .then(res => res.json())
        console.log(newData);
        if (newData.length !== 0) alert(newData.map(obj=> obj.id)) 
        else alert('Конракты не найдены')
        return newData
      }

    const [distributor, setDistributor] = useState({...props.distributor}) 
    return(
        <>
            <div className='card'>
                <div className='flex-column'> 
                    <Input text="Наименование" type="text" name="namee" value={distributor.namee} onChange={(e)=>{setInput(e)}} ></Input>
                    <Input text="Полный адрес" type="text" name="adress" value={distributor.adress} onChange={(e)=>{setInput(e)}} ></Input>
                    <Input text="Телефон" type="text" name="phone" value={distributor.phone} onChange={(e)=>{setInput(e)}}></Input>
                    <Input text="Email" type="text" name="email" value={distributor.email} onChange={(e)=>{setInput(e)}}></Input>
                </div>
                
                <div className='flex-column'>  
                    <Btn text ="Удалить" onClick={()=> props.onDelete(distributor.id)} />
                    <Btn text ="Изменить" onClick={()=> updateData() }/>
                    <Btn text ="Найти договоры" onClick={ ()=> findContracts() }/>
                </div>
 
            </div> 
        </>
     
    ) 
}


export const NewDistributor = (props) => {
    const [distributor, setDistributor] = useState({namee: '', adress:'', phone:'', email:'' })

    const setInput = (e) =>{
      const {name, value} = e.target;
      setDistributor(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

    const createDistributor  = async () => {
        console.log(`data from inputs:`)
        console.log(distributor)
        await fetch('/createDistributor', {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
            body: JSON.stringify({
              ...distributor
            })
           
        })
        .then(res => res.json())
      }

   
    return(
        <>
            <div className='card'>
                <div className='flex-column'> 
                    <Input text="Наименование" type="text" name="namee"  onChange={(e)=>{setInput(e)}} ></Input>
                    <Input text="Полный адрес" type="text" name="adress"  onChange={(e)=>{setInput(e)}} ></Input>
                    <Input text="Телефон" type="text" name="phone" onChange={(e)=>{setInput(e)}}></Input>
                    <Input text="Email" type="text" name="email" onChange={(e)=>{setInput(e)}}></Input>
                </div>
                
                <div className='flex-column'>  
                    <Btn text ="Создать" onClick={ ()=> {
                        if (distributor.namee!=='' && distributor.email!=='') createDistributor()
                        else console.log('Need to fill fields')
                        }
                    } />
                </div>
 
            </div> 
        </>
    ) 
}