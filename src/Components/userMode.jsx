import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const UserModeComp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { username } = useParams();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    const user = users.find((user) => user.username === username);
    setCurrentUser(user);
  }, [username,users])

  const location = useLocation();
  const currentPath = location.pathname;

  const currentTab = currentPath.includes('MyAccount') 
    ? 'MyAccount'
    : currentPath.includes('myOrders')
    ? 'myOrders'
    : 'order';

  return (
    <div>
      <Box sx={{ marginBottom: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Typography component="h6" variant="h4" sx={{ margin: 2 }}>
          Hello User
        </Typography>
        <Tabs
          value={currentTab}
          aria-label="user tabs"
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
            to="order"
            value="order"
            label="Products"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
          <Tab
            component={Link}
            to="myOrders"
            value="myOrders"
            label="My Orders"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
          <Tab
            component={Link}
            to="MyAccount"
            value="MyAccount"
            label="My Account"
            sx={{ textTransform: 'none', fontSize: '16px' }}
          />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  )
}

export default UserModeComp