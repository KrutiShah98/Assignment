import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListandHook() {
    const [user,setUser] = useState([]);
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        console.log("User Data")
    })

    useEffect(()=>{
        // fetchUserdata();
        console.log("User Data");
    },[count])

    useEffect(()=>{
        fetchUserdata();
    },[])
    
    const fetchUserdata = async() => {
        const response = await axios.get("https://fakestoreapi.com/users")
        setUser(response.data)
    }
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th rowSpan={2}>Id</th>
                    <th rowSpan={2}>Email</th>
                    <th rowSpan={2}>Username</th>
                    <th rowSpan={2}>Password</th>
                    <th colSpan={2}>Name</th>
                    <th colSpan={3}>Address</th>
                </tr>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Zipcode</th>
                </tr>
            </thead>
            <tbody>
            {
            user.map((user,item) =>{
                return <tr key={item}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.name.firstname}</td>
                    <td>{user.name.lastname}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    
                    
                </tr>
            })
            }
            </tbody>
        </table>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}