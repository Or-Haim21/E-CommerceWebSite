import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCollectionData } from './firebaseServices';


import CategoriesComp from './Components/admin/categories';
import ManageProductsComp from './Components/admin/manageProducts';
import CustomersComp from './Components/admin/customers';
import AdminModeComp from './Components/admin/adminMode';
import UserModeComp from './Components/user/userMode';
import OrderComp from './Components/user/order';
import MyOrdersComp from './Components/user/myOrders';
import MyAccountComp from './Components/user/myAccount';
import LoginComp from './Components/login';
import StatisticComp from './Components/admin/statistic'; 
import RegistrationComp from './Components/registration';
import { Box } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    loadCollectionData('Users', 'LOAD_USERS', dispatch);
    loadCollectionData('Categories', 'LOAD_CATEGORIES', dispatch);
    loadCollectionData('Products', 'LOAD_PRODUCTS', dispatch);
    loadCollectionData('Orders', 'LOAD_ORDERS', dispatch);
}, [dispatch]);
    

  return (
    <Box>
      <Routes>
        <Route path='/' element={<LoginComp />} />
        <Route path='/registration' element={<RegistrationComp/>} />
        <Route path='/adminMode' element={<AdminModeComp />}>
          <Route index element={<CategoriesComp />} />
          <Route path='categories' element={<CategoriesComp />} />
          <Route path='manageProducts' element={<ManageProductsComp />} />
          <Route path='customers' element={<CustomersComp />} />
          <Route path='statistics' element={<StatisticComp />} />
        </Route>

        <Route path='/userMode/:username/' element={<UserModeComp />}>
          <Route index element={<OrderComp />} />
          <Route path='order' element={<OrderComp />} />
          <Route path='myOrders' element={<MyOrdersComp />} />
          <Route path='MyAccount' element={<MyAccountComp />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
