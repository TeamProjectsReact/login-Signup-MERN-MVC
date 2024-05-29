import React, { useEffect } from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ ProtectRoute }) => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("login2");

    if(EmailUser !== null && RoleUser !== null){
        return (
            ProtectRoute
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default PrivateRoute