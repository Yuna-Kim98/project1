import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import './sytle/adminlogin.css'

function App() {
  return (
    <div className="adminLogin-wrap">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<AdminLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
