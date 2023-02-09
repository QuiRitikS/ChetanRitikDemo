import './App.css';
import React from 'react';
import LoginForm from './component/Forms/Forms';
import Owner from './component/Screens/Owner';
import Admin from './component/Forms/Admin';
import Error from './component/Forms/Error';
// import Layout from './component/Forms/Layout';
import { Routes, Route } from 'react-router-dom'

function App() {

  const captureEmail = (enteredemail) => {
      console.log("Hii from App.js");
      console.log(enteredemail)
  }

  return (
    <Routes>
      {/* <Route path='/' element={<Layout/>} ></Route> */}
      <Route path='/' element={<LoginForm  onLoginData={captureEmail}/>} />
      <Route path='admin' element={<Admin/>}  />
      <Route path='owner' element={<Owner/>}  />
      <Route path='error' element={<Error/>}  />
    </Routes>
  );
}

export default App;
