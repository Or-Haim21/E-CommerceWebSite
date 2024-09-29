import React, { useEffect, useState } from "react";
import { PieChart, BarChart } from "@mui/x-charts";
import { useSelector } from "react-redux";
import { Box, Typography, MenuItem, Select } from "@mui/material";

const StatisticComp = () => {
  const orders = useSelector((state) => state.orders);
  const users = useSelector((state) => state.users).filter(
    (user) => user.type === "customer"
  );

  const [productsPerCustomers, setProductsPerCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("All");

  useEffect(() => {
    console.log("products per customer:", productsPerCustomers);
    const series = [
      {
        data: productsPerCustomers.map((item) => item.value),
      },
    ];

    console.log("series:", series);
    const xAxis = [
      {
        data: productsPerCustomers.map((item) => item.label),
        scaleType: "band",
      },
    ];
    console.log("xAxis:", xAxis);
  }, [productsPerCustomers]);

  useEffect(() => {
    const selectedData =
      selectedCustomer === "All"
        ? orders
        : orders.filter((order) => order.username === selectedCustomer);

    const productList = [];
    selectedData.forEach((order) => {
      const existingProduct = productList.find(
        (item) => item.category === order.product
      );

      if (existingProduct) {
        existingProduct.value += order.qty;
      } else {
        productList.push({
          label: order.product,
          value: order.qty,
        });
      }
    });
    setProductsPerCustomers(productList);
  }, [selectedCustomer, products]);

  useEffect(() => {
    const productList = [];

    orders.forEach((order) => {
      const existingProduct = productList.find(
        (item) => item.label === order.product
      );

      if (existingProduct) {
        existingProduct.value += order.qty;
      } else {
        productList.push({
          id: productList.length,
          label: order.product,
          value: order.qty,
        });
      }
    });

    setProducts(productList);
  }, [orders]);

  const handleCustomerChange = (e) => {
    setSelectedCustomer(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "100px",
        minWidth: "100%",
      }}
    >
      {/* Total Sold Products (Pie Chart) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7e9",
          borderRadius: "10px",
          width: "60%",
          height: "500px",
          margin: "30px",
          color: "#191919",
        }}
      >
        <Typography component="h5" variant="h5" sx={{ margin: 2 }}>
          Total Sold Products
        </Typography>
        <PieChart
          series={[
            {
              data: [...products],
              innerRadius: 60,
              outerRadius: 120,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 225,
              cx: 100,
              cy: 180,
            },
          ]}
          width={450}
          height={400}
        />
      </Box>

      {/* Products Quantity Per Customer (Bar Chart) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e5e7e9",
          borderRadius: "10px",
          width: "60%",
          height: "500px",
          margin: "30px",

          color: "#191919",
        }}
      >
        <Typography component="h5" variant="h5" sx={{ margin: 2 }}>
          Products Quantity Per Customer
        </Typography>

        <Select
          value={selectedCustomer}
          onChange={handleCustomerChange}
          sx={{ marginBottom: 2, width: "200px" }}
        >
          <MenuItem value="All">All</MenuItem>
          {users.map((user) => (
            <MenuItem key={user.username} value={user.username}>
              {user.username}
            </MenuItem>
          ))}
        </Select>

        {/* Bar Chart */}
        <BarChart
          series={[
            {
              data: productsPerCustomers.map((item) => item.value),
            },
          ]}
          xAxis={[
            {
              data: productsPerCustomers.map((item) => item.label),
              scaleType: "band",
              categoryGapRatio: 0.3, // Decreased gap ratio for tighter spacing
              tickPlacement: "middle",
            },
          ]}
          skipAnimation={false}
          height={500}
          barWidth={30} // Set the width of the bars if supported
        />
      </Box>
    </Box>
  );
};

export default StatisticComp;
