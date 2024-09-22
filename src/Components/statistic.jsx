import React, { useEffect, useState } from 'react';
import { PieChart, BarChart } from '@mui/x-charts';
import { useSelector } from 'react-redux';
import { Box, Typography, MenuItem, Select } from '@mui/material';

const StatisticComp = () => {
  const orders = useSelector((state) => state.orders);
  const users = useSelector((state) => state.users);

  const [productsPerCustomers, setProductsPerCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('All');

  useEffect(() => {
    const productsPerUser = users.map((user) => {
      const userOrders = orders.filter((order) => order.username === user.username);
      const productsList = [];

      userOrders.forEach((order) => {
        const existingProduct = productsList.find((item) => item.label === order.product);
        if (existingProduct) {
          existingProduct.value += order.qty;
        } else {
          productsList.push({
            id: productsList.length,
            label: order.product,
            value: order.qty,
          });
        }
      });

      return {
        username: user.username,
        products: productsList,
      };
    });

    setProductsPerCustomers(productsPerUser);
  }, [users, orders]);

  useEffect(() => {
    const productList = [];

    orders.forEach((order) => {
      const existingProduct = productList.find((item) => item.label === order.product);

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

  // Handle selection of customer from dropdown
  const handleCustomerChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  // Filter productsPerCustomers based on selected customer
  const selectedData =
    selectedCustomer === 'All'
      ? products
      : productsPerCustomers.find((cust) => cust.username === selectedCustomer)?.products || [];

  // Ensure valid data for the BarChart
  const validSelectedData = selectedData.filter(
    (item) => item.label && item.value && !isNaN(item.value)
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '100px',
      }}
    >
      {/* Total Sold Products (Pie Chart) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e5e7e9',
          borderRadius: '10px',
          width: '40%',
          color: '#191919',
        }}
      >
        <Typography component="h5" variant="h5" sx={{ margin: 2 }}>
          Total Sold Products
        </Typography>
        <PieChart
          series={[
            {
              data: [...products],
              innerRadius: 30,
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e5e7e9',
          borderRadius: '10px',
          width: '40%',
          color: '#191919',
        }}
      >
        <Typography component="h5" variant="h5" sx={{ margin: 2 }}>
          Products Quantity Per Customer
        </Typography>

        {/* Dropdown to select customer */}
        <Select
          value={selectedCustomer}
          onChange={handleCustomerChange}
          sx={{ marginBottom: 2, width: '200px' }}
        >
          <MenuItem value="All">All</MenuItem>
          {productsPerCustomers.map((customer) => (
            <MenuItem key={customer.username} value={customer.username}>
              {customer.username}
            </MenuItem>
          ))}
        </Select>

        {/* Bar Chart */}
        {validSelectedData.length > 0 ? (
          <BarChart
            series={[
              {
                data: validSelectedData.map((item) => ({
                  x: item.label,
                  y: item.value,
                })),
              },
            ]}
            width={450}
            height={400}
          />
        ) : (
          <Typography>No data available for the selected customer</Typography>
        )}
      </Box>
    </Box>
  );
};

export default StatisticComp;
