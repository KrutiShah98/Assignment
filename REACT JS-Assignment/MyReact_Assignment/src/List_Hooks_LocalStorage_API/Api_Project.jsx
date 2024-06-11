import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Api.css'


export default function Api_Project() {
    const[uname,setUname]=useState([]);
    const[count,setCount]=useState(0);
   
useEffect(()=>{
    console.log("user data or Count updated");
},[count,uname])

useEffect(()=>{
    fetchUserdata();
},[])

const fetchUserdata=async()=>{
    try{
    const response=await axios.get("https://fakestoreapi.com/users")
    setUname(response.data);
}catch{
console.error("Error fetching data");
}
}

  return (
    <div>
        <table border={1}>
            <thead style={{'backgroundColor':'red',color:'white'}}>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Zip code</th>
                    <th>Phone</th>
                  
              
                </tr>
            </thead>
            <tbody>
                {
                    uname.map((user)=>{
                        return <tr key={user}>
                            <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.name.firstname}</td>
                                <td>{user.name.lastname}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.phone}</td>



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
