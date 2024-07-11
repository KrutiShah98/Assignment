import React, { useState } from 'react';
import './ListStyle.css';

export default function CreateList() {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (data.trim() !== '') {
      setList([...list, data]);
      setData('');
    }
  };

  const handleDelete = (index) => {
    const newList = list;
    
    setList(newList);
  };

  return (
    <div className='mainbg'>
      <div>
        <h2>Grocery Shopping</h2>
        <input 
          type="text" 
          placeholder='Enter Your Name' 
          value={data}
          onChange={(e) => setData(e.target.value)} 
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              {/* <button onClick={handleDelete} style={{width:'80px', marginLeft:'10px',textAlign:'center'}}>Delete</button>
              <button onClick={handleedit} style={{width:'80px', marginLeft:'10px',textAlign:'center'}}>Edit</button> */}

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
