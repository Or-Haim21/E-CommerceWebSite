import React from 'react'
import TableComp from './table'
import { Box, Typography, Container } from '@mui/material'

const CustomersComp = () => {

    const productsBought = {
        headers: ['Product', 'Qty', 'Date'],
        columnsTypes:['string', 'number', 'string'],
    }

    const customers = {
        headers:['Full Name', 'Joined At', 'Products Bought'],
        data:[
            ['Avi Ron', '17/031997', <TableComp headers={productsBought.headers} data={[['Watch', 2,'04/03/2019'],['TV', 1,'08/12/2021'],['PC', 1, '08/12/2021'],]} columnsTypes={productsBought.columnsTypes}/>],
            ['Dana Cohen', '11/07/2007', <TableComp headers={productsBought.headers} data={[['TV', 2,'04/12/2021'],['PC', 1, '04/12/2021'],]} columnsTypes={productsBought.columnsTypes}/>],
            ['Or Haim', '12/07/2022', <TableComp headers={productsBought.headers} data={[]} columnsTypes={productsBought.columnsTypes}/>],

        ],
        columnsTypes: ['string', 'string', 'component'],

    }

  return (
    <div>
        <Container component="main" sx={{width:'1200px'}}>
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
                <Typography component="h1" variant="h4" sx={{ margin: 2 }}>
                    <strong>Customers</strong>
                </Typography>
                <TableComp headers={customers.headers} data={customers.data} columnsTypes={customers.columnsTypes}/>
            </Box>
        </Container>
    </div>
  )
}

export default CustomersComp