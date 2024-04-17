
import './App.css';


import Dashboard from './pages/Dashboard';

import Home from './pages/Home';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';



function App() {
  return (
    <>
    <Routes>

     <Route path="/" element={ <Home/>} />
    
     <Route path="/dashboard" element={ <Dashboard/>} />
     <Route path="/login" element={ <Login/>} />
     <Route path='/signup' element={<SignUp/>} />



    </Routes>  

    
    
    </>
  );
}

export default App;
