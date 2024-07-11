import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login_Logout() {
    const navigate=useNavigate()
    return (
        <div>
            <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                <h1>NavBar</h1>
                <button onClick={()=>navigate('./login')} style={{ borderRadius: '20px', width: '100px', height: '50px', marginTop: '10px' }}>Logout</button>
            </div>

            <div style={{height:'450px'}}>
                <h1 style={{margin:'0 auto',textAlign:'center'}}>public views</h1>
            </div>

            <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                <h1>Footer</h1>
                {/* <button style={{ borderRadius: '20px', width: '100px', height: '50px', marginTop: '10px' }}>Logout</button> */}
            </div>
        </div>
    )
}
