import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Button, Tooltip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';



const AdminModeComp = () => {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div>
      <Box sx={{ marginBottom: 4, borderBottom: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography component="h5" variant="h5" sx={{ margin: 1 }}>
          Hello Admin
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Tabs
            value={currentTab}
            aria-label="user tabs"
            centered
            TabIndicatorProps={{
              style: { backgroundColor: '#E5BD4C' },
            }}
            sx={{
              '& .MuiTab-root': {
                width: 160,
                marginX: 2,
                color: '#191919',
              },
              '& .Mui-selected': {
                color: '#E5BD4C !important', // Ensure selected tab color
                fontSize: '20px',
                fontWeight: 'bold',
              },
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
          <Tooltip title="Logout" arrow>
            <IconButton
              color="inherit"
              onClick={handleLogout}
              aria-label="logout"
            >
              <LogoutIcon fontSize='medium' />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Render the content of the selected tab */}
      <Outlet />
    </div>
  );
};

export default AdminModeComp;
