import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/Auth/AuthProvider';
import About from './pages/About/about.page';
import Dashboard from './pages/DashBoard/dashboard.page';

import Home from './pages/Home/home.page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
