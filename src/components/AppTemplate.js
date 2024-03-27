import React, { useReducer } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const initialValue = {
  input_data : "",
  total_characters : 0,
  total_words : 0,
  total_time_req_to_read : 0,
  dark_mode : false
}

const AppTemplate = () => {

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppTemplate