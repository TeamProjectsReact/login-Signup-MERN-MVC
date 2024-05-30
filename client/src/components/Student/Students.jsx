import React, { useState } from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';

const Students = () => {
    // student data
    const [stdData, SetStdData] = useState({
        RegID: '',
        fname: '',
        lname: '',
    })
  return (
    <div className='bg-gray-200 py-16 md:px-20 px-8 min-h-screen'>
        <div className="bg-white py-8 md:px-12 px-4 rounded shadow-md">
            <h1 className="text-xl font-semibold text-gray-500">Add New Student</h1>
        </div>
        <div className="bg-white py-8 md:px-12 px-4 rounded shadow-md my-4">
            <p className="text-gray-500"></p>
        </div>

    </div>
  )
}

export default Students