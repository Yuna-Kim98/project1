import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminMain from './pages/AdminMain.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import './sytle/adminlogin.css'

function App() {
  return (
    <div className="adminLogin-wrap">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<AdminLogin />} />
              <Route path='/admin/main' element={<AdminMain />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
