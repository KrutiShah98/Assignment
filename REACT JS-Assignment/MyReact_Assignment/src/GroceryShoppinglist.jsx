import React, { useState } from 'react'

export default function GroceryShoppinglist() {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (data.trim() !== '') {
      if (editIndex !== null) {
        const newList = [...list];
        newList[editIndex] = data;
        setList(newList);
        setEditIndex(null);
      } else {
        setList([...list, data]);
      }
      setData('');
    }
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleEdit = (index) => {
    setData(list[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <div>
        <h2>Grocery Shopping</h2>
        <input 
          type="text" 
          placeholder='Enter Your Item' 
          value={data}
          onChange={(e) => setData(e.target.value)} 
        />
        <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button 
                onClick={() => handleDelete(index)} 
                style={{width:'80px', marginLeft:'10px',textAlign:'center'}}
              >
                Delete
              </button>
              <button 
                onClick={() => handleEdit(index)} 
                style={{width:'80px', marginLeft:'10px',textAlign:'center'}}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
