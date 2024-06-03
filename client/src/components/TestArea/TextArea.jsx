import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TextArea = () => {
    const navigate = useNavigate()
    const [userdata, SetUserData] = useState({
        dataUser: ''
    })

    const headleKey = (e) => {
        if(e.key === "Enter"){
            SetUserData(...dataUser + '\n');
        }
    }

    const HeadeleSubmit = async (e) => {
        e.preventDefault();
        console.log(userdata);
        
        try{
            const res = await axios.post('http://localhost:5000/api/Test/AddTest', userdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Information Added Successfull")
                    navigate('/Dashboard')
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err) {
            console.log(err)
        }

    }
  return (
    <div className='bg-gray-200 py-8 px-12 min-h-screen'>
        <div className="bg-white py-4 px-8 rounded shadow-md">
            <form onSubmit={HeadeleSubmit}>
                <div className="">
                    <label htmlFor="" className="">User Infor</label>
                    <textarea 
                        name=""
                        id=""
                        className='bg-gray-200 w-full my-2 rounded h-40 pl-2 pt-2'
                        style={{ resize: 'none' }}
                        onKeyDown={headleKey}
                        onChange={e => SetUserData({...userdata, dataUser:e.target.value})}
                        >
                        
                    </textarea>

                    <button type="submit" className="bg-blue-500 py-4 px-8 rounded shadow-md text-white">Submit Data</button>


                </div>
            </form>
        </div>
    </div>
  )
}

export default TextArea