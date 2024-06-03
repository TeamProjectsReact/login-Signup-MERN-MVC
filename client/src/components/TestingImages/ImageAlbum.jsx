import React, { useState } from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";
import { Link, useNavigate } from 'react-router-dom';

const ImageAlbum = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    // image data
    const [ImgData, SetImgData] = useState({
        
    })
    
  return (
    <div className='bg-gray-200 py-8 px-12 min-h-screen'>
        <div className="bg-white py-8 px-12 rounded shadow-md">
            <form>
                <div className="">
                    <label htmlFor="" className="Images">Images</label>
                    <input type="file" name="" id="" className="" multiple />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ImageAlbum