import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, IconButton, Tooltip, Backdrop } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserModeComp = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const { username } = useParams();
  const users = useSelector((state) => state.users);


  useEffect(() => {
    const user = users.find((user) => user.username === username);
    setCurrentUser(user);
  }, [username, users]);

  const location = useLocation();
  const currentPath = location.pathname;

  const currentTab = currentPath.includes('MyAccount')
    ? 'MyAccount'
    : currentPath.includes('myOrders')
      ? 'myOrders'
      : 'order';

  const handleLogout = () => {
    navigate('/');
  };


  return (
    <Box
      sx={{
        minWidth:'100%',
      }}
    >
      <Box
        sx={{
          marginBottom: 4,
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          fullwidth: '100%',
          height:'220px',
          backgroundImage: 'url(/TopBanner.jpg)', 
          backgroundSize: '100%',  
          backgroundPosition: 'center', 
          position: 'sticky', // Makes the box sticky
          top: 0,             // Sticks the box to the top of the viewport
          zIndex: 5,         // Ensures it stays on top of other content
          backgroundColor: '#fff', // Add a background color so it's visible on scroll
          
        }}
      >

        <Box
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',  
            width: '100%',
            height: '100%'
          }}
        >
          <Tabs
            value={currentTab}
            aria-label="user tabs"
            centered  
            TabIndicatorProps={{
              style: { backgroundColor: '#E5BD4C', marginTop:'50px' },
            }}
            sx={{
              '& .MuiTab-root': {
                width: 160,
                marginX: 2,
                color: '#191919',
                paddingBottom: '0px',
              },
              '& .Mui-selected': {
                color: '#E5BD4C !important',

              },
            }}
          >
            <Tab
              component={Link}
              to="order"
              state={{ currentUser }}
              value="order"
              label="Products"
              sx={{ textTransform: 'none', fontSize: '16px' }}
            />
            <Tab
              component={Link}
              to="myOrders"
              state={{ currentUser }}
              value="myOrders"
              label="My Orders"
              sx={{ textTransform: 'none', fontSize: '16px' }}
            />
            <Tab
              component={Link}
              to="MyAccount"
              state={{ currentUser }}
              value="MyAccount"
              label="My Account"
              sx={{ textTransform: 'none', fontSize: '16px' }}
            />
          </Tabs>

          <Tooltip title="Logout" arrow>
            <IconButton
              color="inherit"
              sx={{ color: 'white', marginRight:'10px'}}
              onClick={handleLogout}
              aria-label="logout"
            >
              <LogoutIcon fontSize='medium' />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserModeComp;
