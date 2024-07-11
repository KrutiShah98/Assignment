import React from 'react'
import Counter from './Counter'
import CreateList from './CreateList'
import Login_Logout from './Login_Logout'
import Api_Project from './Api_Project'
import LoginPage from './LoginPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import GroceryShoppinglist from './GroceryShoppinglist'

export default function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <CreateList/> */}
      {/* <Api_Project/> */}
      {/* <APi_2/> */}
      {/* <Login_Logout/> */}

      {/* <LoginPage/> */}
      <GroceryShoppinglist/>


      {/* <BrowserRouter>


        <Routes>
          <Route path='/' element={<Login_Logout />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>

        </Routes>
      </BrowserRouter> */}
    </div>
  )
}
