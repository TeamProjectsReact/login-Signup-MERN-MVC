import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
                    window.location.reload()
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


    // fetch data
    const [ViewUser, SetViewData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/Test/GetTest')
        .then(res => SetViewData(res.data.Result))
        .catch(err => console.log(err))
    }, [])


    const checkForNewlines = (text) => {
        return text.includes('\n');
    };



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

        <div className="bg-white py-4 px-8 rounded shadow-md my-4">

            All Data

            <div className="my-4">  
            {
                ViewUser.map((savedText, index) => (
                    <div key={index}>
                        {savedText.content.split('\n').map((line, i) => (
                        <div key={i}>&#8226; {line}</div>
                        ))}
                        <hr />
                    </div>
                    
            ))}
            </div>

        </div>
    </div>
  )
}

export default TextArea