import React from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";
import { Link, useNavigate } from 'react-router-dom';

const ImageAlbum = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    
  return (
    <div className='bg-gray-200 py-8 px-12 min-h-screen'>
        <div className="bg-white py-8 px-12 rounded shadow-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quisquam quis eaque necessitatibus. Itaque placeat doloribus tenetur qui nemo fugit cupiditate. Officia ab quidem ex aspernatur harum ut quasi illo.
        </div>
    </div>
  )
}

export default ImageAlbum