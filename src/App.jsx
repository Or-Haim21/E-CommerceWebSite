import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import db from './firebase';
import { useDispatch } from 'react-redux';

import {collection, onSnapshot, query} from 'firebase/firestore';
import CategoriesComp from './Components/categories';
import ManageProductsComp from './Components/manageProducts';
import CustomersComp from './Components/customers';
import AdminModeComp from './Components/adminMode';
import UserModeComp from './Components/userMode';
import OrderComp from './Components/order';
import MyOrdersComp from './Components/myOrders';
import MyAccountComp from './Components/myAccount';
import LoginComp from './Components/login';
import StatisticComp from './Components/statistic';
import RegistrationComp from './Components/registration';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const q = query(collection(db, 'Users'));
    onSnapshot(q, (querySnapshot)=>{
      const users = querySnapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      dispatch({type:'LOAD', payload: users});
    })
  },[]);

  return (
    <div>

      {/* <Link to={'/adminMode'} >Admin Mode</Link> &nbsp;
      <Link to={'/userMode'} >User Mode</Link> */}

      

      <Routes>
        <Route path={'/'} element={<LoginComp/>}/>
        <Route path='/adminMode' element={<AdminModeComp />}>
          <Route index element={<CategoriesComp />} /> 
          <Route path='categories' element={<CategoriesComp />} />
          <Route path='manageProducts' element={<ManageProductsComp />} />
          <Route path='customers' element={<CustomersComp />} />
        </Route>

        <Route path='/userMode/:username' element={<UserModeComp />}>
          <Route index element={<MyAccountComp />} />
          <Route path='order' element={<OrderComp />} />
          <Route path='myOrders' element={<MyOrdersComp />} />
          <Route path='MyAccount' element={<MyAccountComp />} />
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
