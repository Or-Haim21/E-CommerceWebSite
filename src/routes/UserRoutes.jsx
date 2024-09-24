import React from "react";
import { Route, Routes } from 'react-router-dom';
import UserOrdersPage from "../pages/user/orders/UserOrdersPage";
import UserProductsPage from "../pages/user/products/UserProductsPage";
import AccountPage from "../pages/user/account/AccountPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="products" element={<UserProductsPage />} />
      <Route path="orders" element={<UserOrdersPage />} />
      <Route path="account" element={<AccountPage />} />
    </Routes>
  );
};

export default UserRoutes;
