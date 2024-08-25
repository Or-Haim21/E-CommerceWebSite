import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collection, onSnapshot, query } from 'firebase/firestore';
import db from './firebase';

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

  useEffect(() => {
    const loadCollectionData = (collectionName, dataType) => {
      const q = query(collection(db, collectionName));
      onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: 'LOAD', dataType, payload: data });
      });
    };

    loadCollectionData('Users', 'users');
    loadCollectionData('Categories', 'categories');
    loadCollectionData('Products', 'products');
    loadCollectionData('Orders', 'orders');
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginComp />} />
        <Route path='/adminMode' element={<AdminModeComp />}>
          <Route index element={<CategoriesComp />} />
          <Route path='categories' element={<CategoriesComp />} />
          <Route path='manageProducts' element={<ManageProductsComp />} />
          <Route path='customers' element={<CustomersComp />} />
        </Route>

        <Route path='/userMode/:username' element={<UserModeComp />}>
          <Route index element={<OrderComp />} />
          <Route path='order' element={<OrderComp />} />
          <Route path='myOrders' element={<MyOrdersComp />} />
          <Route path='MyAccount' element={<MyAccountComp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
