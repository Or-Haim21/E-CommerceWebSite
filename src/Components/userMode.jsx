import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Button } from '@mui/material';

const UserModeComp = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const { username } = useParams();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    const user = users.find((user) => user.username === username);
    setCurrentUser(user);
  }, [username, users])


  const location = useLocation();
  const currentPath = location.pathname;

  const currentTab = currentPath.includes('MyAccount')
    ? 'MyAccount'
    : currentPath.includes('myOrders')
      ? 'myOrders'
      : 'order';

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div>
      <Box
        sx={{
          marginBottom: 4,
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <Typography component="h5" variant="h5" sx={{ margin: 1 }}>
          Hello {username}
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
            sx={{
              '& .MuiTab-root': {
                Width: 120,
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
          <Button
            variant="contained"
            sx={{ height: '30px', width: '40px', fontSize: '12px' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Box>
      <Outlet />
    </div>
  )
}

export default UserModeComp