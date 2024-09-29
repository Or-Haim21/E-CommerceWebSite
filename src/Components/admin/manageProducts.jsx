import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductComp from "./product";
import { useSelector } from "react-redux";
import NewProductDialogComp from "./newProductDialog"; 

const ManageProductsComp = () => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories); 

  const [open, setOpen] = useState(false); 

  const handleOpen = () => setOpen(true); 
  const handleClose = () => setOpen(false); 

  return (
    <Container component="main" sx={{ width: "100%", minWidth: "100%", marginBottom:'20px' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography component="h4" variant="h4" sx={{ marginBottom: 4 }}>
          <strong>Products</strong>
        </Typography>

        <Box>
          <Grid container sx={{ width: "100%" }}>
            {products.map((product) => (
              <Grid item xs={12} sm={12} md={12} key={product.id}>
                <ProductComp
                  key={product.id}
                  product={product}
                  categories={categories}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginTop: 4,
            backgroundColor: "#E5BD4C",
            "&:hover": {
              backgroundColor: "#FFD55F",
            },
          }}
          onClick={handleOpen} 
        >
          Add New
        </Button>

        
        <NewProductDialogComp
          open={open}
          handleClose={handleClose}
          categories={categories} 
        />
      </Box>
    </Container>
  );
};

export default ManageProductsComp;
