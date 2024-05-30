import React, { useState } from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";
import { Link, useNavigate } from 'react-router-dom';


const AddNewStudent = () => {
    const navigate = useNavigate()
    // student data
    const [stdData, SetStdData] = useState({
        RegID: '',
        NIC: '',
        fname: '',
        lname: '',
        image: null
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...stdData, [name]: value });
    };
    const handleFileChange = (e) => {
        setFormData({ ...stdData, image: e.target.files[0] });
    };

    // headleSubmit
    const headleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('title', stdData.title);
        formDataObj.append('description', stdData.description);
        formDataObj.append('image', stdData.image);

        try{            
            const res = await axios.post('http://localhost:5000/api/Student/AddStudent', formDataObj)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Student Added Successfull")
                    navigate('/Dashboard')
                    window.location.reload()
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='bg-gray-200 py-16 md:px-20 px-8 min-h-screen'>
        <div className="bg-white py-8 md:px-12 px-4 rounded shadow-md">
            <Link to={'/Dashboard'}>
                <button className='bg-blue-500 py-2 px-4 rounded text-white duration-500 hover:bg-blue-600'>Back</button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-500">Add New Student</h1>
        </div>
        <div className="bg-white py-8 md:px-12 px-4 rounded shadow-md my-4">
            <div className="text-gray-500">
                <form onSubmit={headleSubmit}>
                    <div className="md:grid grid-cols-3 gap-5">
                        <div className="">
                            <label htmlFor="">Registation Number: </label>
                            <input type="text" name="regNo" id="regNo" className="w-full h-12 rounded bg-gray-200 pl-2 my-2"  required placeholder='Enter Regisatation Number'
                            onChange={handleInputChange} />
                        </div>
                        <div className="">
                            <label htmlFor="">NIC Number: </label>
                            <input type="text" name="NIC" id="NIC" className="w-full h-12 rounded bg-gray-200 pl-2 my-2"  required placeholder='Enter NIC Number'
                            onChange={handleInputChange} />
                        </div>
                        <div className="">
                            <label htmlFor="">First Name : </label>
                            <input type="text" name="regNo" id="regNo" className="w-full h-12 rounded bg-gray-200 pl-2 my-2"  required placeholder='Enter First Name'
                            onChange={handleInputChange} />
                        </div>
                        <div className="">
                            <label htmlFor="">Last Name : </label>
                            <input type="text" name="regNo" id="regNo" className="w-full h-12 rounded bg-gray-200 pl-2 my-2"  required placeholder='Enter Last Name'
                            onChange={handleInputChange} />
                        </div>
                        <div className="">
                            <label htmlFor="">Profile Image : </label>
                            <input type="file" name="image" id="image" className="w-full h-12 rounded bg-gray-200 pl-2 my-2"  required placeholder='Enter Last Name'
                            onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="">
                        <button type='submit' className='bg-green-500 py-2 px-4 rounded text-white duration-500 hover:bg-green-600'>Add Student</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddNewStudent