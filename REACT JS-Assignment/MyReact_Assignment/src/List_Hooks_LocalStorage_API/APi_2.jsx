import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function APi_2() {
    const[username,setUsername]=useState([])
    // const[count,setCount]

    useEffect(()=>{
        fetchUserdata()
    },[])

    const fetchUserdata=async()=>{
        try{
            const result=await axios.get("https://fakestoreapi.com/users")
            setUsername(result.data);

        }catch{
            console.log('ERROR');
        }
    }
  return (
    <div>
        <table>
            <thead>
            <tr>
                <td>id</td>
                <td>UserName</td>
                <td>Email</td>
                <td>Password</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>City</td>

            </tr>
            </thead>
            <tbody>
                {
                  username.map((user)=>{
                    return <tr key={user}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.name.firstname}</td>
                        <td>{user.name.lastname}</td>
                        <td>{user.address.city}</td>

                    </tr>
                  })  
                }
            </tbody>
        </table>
    </div>
  )
}
