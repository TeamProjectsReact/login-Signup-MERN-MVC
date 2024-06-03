import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewStudent from "./components/Student/AddNewStudent";
import ImageAlbum from "./components/TestingImages/ImageAlbum";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<PrivateRoute ProtectRoute={<Dashboard />}/>} />
        <Route path="/AddStudent" element={<PrivateRoute ProtectRoute={<AddNewStudent />} />} />
        <Route path="/ImageAlbum" element={<PrivateRoute ProtectRoute={<ImageAlbum /> }/>} />
      </Routes>   
    </BrowserRouter>
  )
}