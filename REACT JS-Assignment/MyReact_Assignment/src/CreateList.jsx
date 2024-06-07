import React, { useState } from 'react'
import './ListStyle.css'

export default function CreateList() {
  const[data,setData]=useState('');
  const[list,setList]=useState([])

  const handleadd=()=>{
    setList([...list,data])
  }

  return (
    <div>
      <div>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setData(e.target.value)}/>
        <button onClick={handleadd}>Add</button>
        <ul>
          {
          list.map((e,i)=>{
            return  <li key={i}>{e}</li>
          })
        }
        </ul>
    </div>
    </div>
  )
}
