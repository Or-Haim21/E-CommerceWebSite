import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import TableComp from './table'
 
import { Box, Typography, Container } from '@mui/material'

const MyOrdersComp = () => {
    const location = useLocation();
    const { currentUser } = location.state || {};
    const [userOrders, setUserOrders] = useState([]);
    const ordersData = useSelector((state) => state.orders)


    const orders = {
        headers:['Title', 'Qty', 'Total', 'Date'],
        data:userOrders,
        columnsTypes: ['string', 'number', 'string', 'string'],
    }
    
    useEffect(() => {
        if (currentUser) {
            const filteredOrders = ordersData
            .filter(order => order.username === currentUser.username)
            .map((order) => [
                order.product,
                order.qty, 
                order.totalPrice, 
                order.date
            ]);
            
            setUserOrders(filteredOrders);
        }
    }, [currentUser, ordersData]);
    


  return (
    <div>
        <Container component="main" sx={{minWidth:'70%'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'normal',
                    padding: '20px',
                    marginBottom: '20px',
                    border: 'none',
                  }}
            >
                <Typography component="h4" variant="h4" sx={{ marginBottom: 4 }}>
                    <strong>My orders</strong>
                </Typography>
                <TableComp headers={orders.headers} data={orders.data} columnsTypes={orders.columnsTypes}/>
            </Box>
        </Container>

    </div>
  )
}

export default MyOrdersComp