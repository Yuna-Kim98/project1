// import React from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './pages/AdminLayout.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminMain from './pages/AdminMain.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import './sytle/adminlogin.css';

function App() {

  return (
    <div className="adminLogin-wrap">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AdminLayout />}>
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