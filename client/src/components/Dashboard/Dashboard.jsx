import React from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {   
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
    
    const logout = () => {
        localStorage.clear()        
        window.location.reload()
    }
  return (
    <div className='bg-gray-200 py-16 md:px-20 px-8 min-h-screen'>
        <div className="bg-white py-8 md:px-12 px-4 rounded shadow-md">
            <h1 className="text-xl font-semibold text-gray-500">Dashboard</h1>
            <p className="text-red-500 cursor-pointer" onClick={logout}>Logout</p>
        </div>
    </div>
  )
}

export default Dashboard