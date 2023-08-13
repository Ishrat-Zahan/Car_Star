import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dheader from './Dheader';
import Dbody from './Dbody';
import Dsidebar from './Dsidebar';
import Dhome from './Dhome';

 const DashLayout = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dhome />} />
            <Route path="dheader" element={<Dheader />} />
            <Route path="dbody" element={<Dbody />} />          
            <Route path="dsidebar" element={<Dsidebar />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default DashLayout;
