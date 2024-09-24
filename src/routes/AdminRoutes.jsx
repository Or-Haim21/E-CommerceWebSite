import React from "react";
import { Route, Routes } from 'react-router-dom';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="products" element={<AdminProductsPage />} />
      <Route path="orders" element={<AdminOrdersPage />} />
      <Route path="statistics" element={<StatisticPage />} />
      <Route path="customers" element={<CustomersPage />} />
    </Routes>
  );
};

export default AdminRoutes;
