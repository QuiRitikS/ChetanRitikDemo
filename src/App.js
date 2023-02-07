import './App.css';
import React from 'react';
import LoginForm from './component/Forms/Forms';
import Dashboard from './component/Screens/Dashboard';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    //  <Routes>
    //         <Route path='/' element={<LoginForm/>}  />
    //         <Route path='dashboard' element={<Dashboard/>}  />
    //  </Routes>    
    <LoginForm/>
  );
}

export default App;
