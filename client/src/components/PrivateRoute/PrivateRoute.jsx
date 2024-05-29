import React from 'react'
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage";

const PrivateRoute = ({ ProtectRoute }) => {
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
}

export default PrivateRoute