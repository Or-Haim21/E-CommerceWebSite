import React from 'react'
import TableComp from './table'
 
import { Box, Typography, Container } from '@mui/material'

const MyOrdersComp = () => {

    const orders = {
        headers:['Title', 'Qty', 'Total', 'Date'],
        data:[
            ['Watch', 2, '$700', '04/03/2019'],
            ['TV', 1, '$500', '04/12/2021'],
            ['PC', 1, '$80', '04/12/2021'],
            ['Shirt', 1, '$9', '04/12/2021']
        ],
        columnsTypes: ['string', 'number', 'string', 'string'],

    }

  return (
    <div>
        <Container component="main" sx={{width:'850px'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'normal',
                    boxShadow: '0 0 3px',
                    backgroundColor: '#f8f9f9',
                    padding: '30px',
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginBottom: '10px',
                    borderRadius: '8px',
                  }}
            >
                <Typography component="h1" variant="h6" sx={{ margin: 2 }}>
                    <strong>Orders</strong>
                </Typography>
                <TableComp headers={orders.headers} data={orders.data} columnsTypes={orders.columnsTypes}/>
            </Box>
        </Container>

    </div>
  )
}

export default MyOrdersComp