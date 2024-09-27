import { useSelector } from 'react-redux';
import TableComp from '../table';
import { Box, Typography, Container } from '@mui/material';
import { useEffect } from 'react';

const CustomersComp = () => {
    const orders = useSelector((state) => state.orders);
    const productsBought = {
        headers: ['Product', 'Qty', 'Date'],
        columnsTypes: ['string', 'number', 'string'],
    };

    const users = useSelector((state) => state.users);

    const customersData = useSelector((state) => state.users)
        .filter((user) => user.type === 'customer')
        .map((user) => {
            // Filter orders for the current user
            const userOrders = orders.filter((order) => order.username === user.username);

            // Format data for the "Products Bought" column
            const productsBoughtData = userOrders.map((order) => ([
                order.product, 
                order.qty,  
                order.date
            ]));

            return [
                user.firstName + ' ' + user.lastName, 
                user.joinedAt,

                <TableComp 
                    key={user.username} 
                    headers={productsBought.headers} 
                    data={productsBoughtData} 
                    columnsTypes={productsBought.columnsTypes}
                />
            ];
        });

        useEffect(()=> {
            console.log("users:", users);
        },[users])

    const customers = {
        headers: ['Full Name', 'Joined At', 'Products Bought'],
        data: customersData,
        columnsTypes: ['string', 'string', 'component'],
    };

    return (
        <div>
            <Container component="main" sx={{ minWidth: '80%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'normal',
                        marginBottom:'20px',
                        padding: '20px',
                        border: 'none',
                    }}
                >
                    <Typography component="h4" variant="h4" sx={{ marginBottom: 4 }}>
                        <strong>Customers</strong>
                    </Typography>
                    <TableComp 
                        headers={customers.headers} 
                        data={customers.data} 
                        columnsTypes={customers.columnsTypes} 
                    />
                </Box>
            </Container>
        </div>
    );
};

export default CustomersComp;
