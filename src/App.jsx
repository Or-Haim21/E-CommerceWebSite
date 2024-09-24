import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import db from "./firebase";

import { Box } from "@mui/material";
import LoginComp from "./Components/login";
import RegistrationComp from "./Components/registration";
import AdminModeComp from "./Components/adminMode";
import CategoriesComp from "./Components/categories";
import ManageProductsComp from "./Components/manageProducts";
import CustomersComp from "./Components/customers";
import StatisticComp from "./Components/statistic";
import UserModeComp from "./Components/userMode";
import OrderComp from "./Components/order";
import MyOrdersComp from "./Components/myOrders";
import MyAccountComp from "./Components/myAccount";
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    const loadCollectionData = (collectionName, actionType) => {
      const q = query(collection(db, collectionName));
      onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: actionType, payload: data });
      });
    };

    loadCollectionData("Users", "LOAD_USERS");
    loadCollectionData("Categories", "LOAD_CATEGORIES");
    loadCollectionData("Products", "LOAD_PRODUCTS");
    loadCollectionData("Orders", "LOAD_ORDERS");
  }, [dispatch]);

  useEffect(() => {
    if (currentUser.username === null) {
      Navigate("/auth/sign-in");
      return;
    }

    if (currentUser.type === "admin") {
      Navigate("/admin");
    } else {
      Navigate(`/user/${currentUser.username}`);
    }
  }, [currentUser]);

  return (
    <Box>
      <Routes>
        {/* User routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Auth routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </Box>
  );

  // return (
  //   <Box>
  //     <Routes>
  //       <Route path="/" element={<LoginComp />} />
  //       <Route path="/registration" element={<RegistrationComp />} />
  //       <Route path="/adminMode" element={<AdminModeComp />}>
  //         <Route index element={<CategoriesComp />} />
  //         <Route path="categories" element={<CategoriesComp />} />
  //         <Route path="manageProducts" element={<ManageProductsComp />} />
  //         <Route path="customers" element={<CustomersComp />} />
  //         <Route path="statistics" element={<StatisticComp />} />
  //       </Route>

  //       <Route path="/userMode/:username" element={<UserModeComp />}>
  //         <Route index element={<OrderComp />} />
  //         <Route path="order" element={<OrderComp />} />
  //         <Route path="myOrders" element={<MyOrdersComp />} />
  //         <Route path="MyAccount" element={<MyAccountComp />} />
  //       </Route>
  //     </Routes>
  //   </Box>
  // );
};

export default App;
