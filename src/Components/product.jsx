import { Container, Box, TextField, InputLabel, TextareaAutosize, Select, MenuItem, Button } from '@mui/material'
import React from 'react'
import TableComp from './table'

const ProductComp = ({title}) => {

  const products = {
    data: [
      [{ href: 'https://www.google.com/', text: 'watch' }, 3, '01/01/2020'],
      [{ href: 'https://www.ynet.co.il/news/category/187', text: 'PC' }, 1, '01/01/2020'],
    ],

    headers: ['Product', 'Oty', 'Date'],

    columnsTypes: ['link', 'number', 'string'],
  }

  return (
    <div>
      <Container component="main" sx={{width:'850px'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: '20px',
            }}
          >
            <Box
              sx={{
                paddingBottom: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >

              <InputLabel shrink htmlFor="title" style={{ fontSize: '20px' }}>
                <strong>Title:</strong>
              </InputLabel>
              <TextField
                id="title"
                name="title"
                value={title}
                inputProps={{ sx: { height: '5px' } }}
              //onChange={e => setLoginDetails({ ...loginDetails, username: e.target.value })}
              />
            </Box>

            <Box
              sx={{
                paddingBottom: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <InputLabel shrink htmlFor="title" style={{ fontSize: '20px' }}>
                <strong>Category:</strong>
              </InputLabel>
              <Select
                id="category"
                sx={{
                  width: '200px',
                  height: '40px',
                }}

              //onChange={handleChange}
              >
                <MenuItem value={'aaaaaaaa'}>aaaaaaaa</MenuItem>
                <MenuItem value={'bbbbbbbb'}>bbbbbbbb</MenuItem>
                <MenuItem value={'bbbbbbbb'}>bbbbbbbb</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                paddingBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <InputLabel shrink htmlFor="title" style={{ fontSize: '20px' }}>
                <strong>Description:</strong>
              </InputLabel>
              <TextareaAutosize
                minRows={10}
                style={{
                  width: '300px',
                  borderRadius: '6px',
                  outlineColor: '#1976D3',
                  borderColor: 'lightgrey',
                  marginBottom: '20px',
                }}
              />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              paddingBottom: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingRight: '20px',
            }}
          >

            <Box
              sx={{
                paddingBottom: '15px',
              }}
            >
              <InputLabel shrink htmlFor="price"
                sx={{
                  fontSize: '20px',
                }}
              >
                <strong>Price:</strong>
              </InputLabel>
              <TextField
                type="number"
                id="price"
                name="price"
                inputProps={{ sx: { height: '3px' } }}
              //onChange={e => setLoginDetails({ ...loginDetails, username: e.target.value })}
              />
            </Box>
            <Box
              sx={{
                paddingBottom: '15px',
              }}
            >
              <InputLabel shrink htmlFor="price"
                sx={{
                  fontSize: '20px',
                }}
              >
                <strong>Link to picture:</strong>
              </InputLabel>
              <TextField
                type="text"
                id="LinkToPic"
                name="LinkToPic"
                inputProps={{ sx: { height: '3px' } }}
              //onChange={e => setLoginDetails({ ...loginDetails, username: e.target.value })}
              />
            </Box>
            <Box>
            <InputLabel shrink htmlFor="price"
                sx={{
                  fontSize: '20px',
                }}
              >
                <strong>Bought By:</strong>
              </InputLabel>
              <TableComp headers={products.headers} data={products.data} columnsTypes={products.columnsTypes} />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default ProductComp