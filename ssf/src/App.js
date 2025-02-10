// import React from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminMain from './pages/AdminMain.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import './sytle/adminlogin.css'
import ImageList from './commons/ImageList.jsx';
import axios from 'axios';
import ProductBlock from './commons/ProductBlock.jsx';

function App() {
  // const [imgList, setImgList] = useState([]);
  // const [detailList, setDetailList] = useState([]);

  //   useEffect(() => {
  //       axios.get("/data/example.json")
  //           .then(res => {
  //               setImgList(res.data.images);
  //               setDetailList(res.data.detail);
  //               console.log('setImgList --> ', res.data.images);
  //               console.log('setDetailListt --> ', res.data.detail);
  //           })
  //           .catch(err => console.log(err));
  //   }, []);

  return (
    <div className="adminLogin-wrap">
      {/* <ImageList imgList={imgList} />
      <ProductBlock detailList={detailList} /> */}
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