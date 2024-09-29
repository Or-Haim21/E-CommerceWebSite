import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductComp from "./product";
import { useSelector } from "react-redux";
import NewProductDialogComp from "./newProductDialog"; // Import the new component

const ManageProductsComp = () => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories); // Categories from Redux store

  const [open, setOpen] = useState(false); // Modal state

  const handleOpen = () => setOpen(true); // Open modal
  const handleClose = () => setOpen(false); // Close modal

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
              <Grid item xs={12} sm={6} md={6} key={product.id}>
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
          onClick={handleOpen} // Open the modal
        >
          Add New
        </Button>

        {/* Use AddNewProductDialog component */}
        <NewProductDialogComp
          open={open}
          handleClose={handleClose}
          categories={categories} // Pass categories as props
        />
      </Box>
    </Container>
  );
};

export default ManageProductsComp;
