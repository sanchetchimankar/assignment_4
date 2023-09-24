import React from 'react';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboad/Dashboard';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
