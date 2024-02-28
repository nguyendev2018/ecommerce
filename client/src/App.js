import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import path from "./utils/path";
import {
  Blog,
  DetailProduct,
  Home,
  Login,
  Public,
  Services,
} from "./pages/public";
import { useDispatch } from "react-redux";
import { getCategories } from "./store/categories/asyncAction";
const App = () => {
  return (
    <div className="min-h-screen font-main">
        <Routes>
          <Route  path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />}/>
          <Route path={path.LOGIN} element={<Login />}/>
          <Route path={path.BLOGS} element={<Blog />}/>
          <Route path={path.DEATAIL_PRODUCTS} element={<DetailProduct />}/>
          <Route path={path.OUR_SERVICES} element={<Services />}/>
          </Route> 
          <Route path={path.LOGIN} element={<Login />}></Route>
        </Routes>
    </div>
  );
};

export default App;
