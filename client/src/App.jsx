import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Students from "./components/Student/Students";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<PrivateRoute ProtectRoute={<Dashboard />}/>} />
        <Route path="/Student" element={<PrivateRoute ProtectRoute={<Students />} />} />
      </Routes>   
    </BrowserRouter>
  )
}