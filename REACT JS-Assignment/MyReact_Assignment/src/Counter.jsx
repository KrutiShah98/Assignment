import React, { useState } from 'react'
import './CounterStyle.css'

export default function Counter() {
    const[number,setNumber]=useState(0);

    const handleinc=()=>{
        setNumber(number+1);
    }
    const handledec=()=>{
        setNumber(number-1);
    }
    const handlereset=()=>{
setNumber(0);
    }
  return (
    <div className='main'>
    <div className='container' style={{height:'100%'}}>
   
        <h1>{number}</h1>
        <button  className='btnall' onClick={handleinc}>Increment</button>
        <button  className='btnall' onClick={handledec}>Decrement</button>
        <br /><br />
        <button className='btnall' onClick={handlereset}>Reset</button>
        </div>
    </div>
  )
}
