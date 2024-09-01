import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, Typography } from '@mui/material';



const AdminModeComp = () => {
  const location = useLocation();
  const currentPath = location.pathname;
;


  // Determine the current tab based on the route
  const currentTab = currentPath.includes('manageProducts')
    ? 'manageProducts'
    : currentPath.includes('statistics')
    ? 'statistics'
    : currentPath.includes('customers')
    ? 'customers'
    : 'categories'; // Default to categories

  return (
    <div>
      <Box sx={{ marginBottom: 4, borderBottom: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography component="h5" variant="h5" sx={{ margin: 1 }}>
          Hello Admin
        </Typography>
        <Tabs
          value={currentTab}
          aria-label="admin tabs"
          centered
          sx={{
            '& .MuiTab-root': {
              minWidth: 120,
              marginX: 2,
            },
            '& .MuiTab-root:last-child': {
              marginX: 0,
            }
          }}
        >
          <Tab
            component={Link}
            to="categories"
            value="categories"
            label="Categories"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
          <Tab
            component={Link}
            to="manageProducts"
            value="manageProducts"
            label="Products"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
          <Tab
            component={Link}
            to="statistics"
            value="statistics"
            label="Statistics"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
          <Tab
            component={Link}
            to="customers"
            value="customers"
            label="Customers"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
        </Tabs>
      </Box>
      
      {/* Render the content of the selected tab */}
      <Outlet />
    </div>
  );
};

export default AdminModeComp;
