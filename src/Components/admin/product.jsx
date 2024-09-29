import {Container, Box, TextField, InputLabel, TextareaAutosize, Select, MenuItem, Button,} from "@mui/material";
import { useSelector } from "react-redux";
import { updateDoc,doc  } from "firebase/firestore";
import db from "../../firebase";

import React, { useEffect, useState } from "react";
import TableComp from "../table";

const ProductComp = ({ product, categories }) => {
  const orders = useSelector((state) => state.orders)
    .filter((order) => order.product === product.title)
    .map((order) => [
      order.username, 
      order.qty, 
      order.date, 
    ]);

  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    price:  0,
    linkToPic: "",
    inStock: 0,
  });

  const usersBuy = {
    data: orders,
    headers: ["Name", "Qty", "Date"],
    columnsTypes: ["string", "number", "string"],
  };

  const handleSave = async () => {

    if (
      !productData.title ||
      !productData.category ||
      !productData.price ||
      !productData.linkToPic
    ) {
      alert(
        "Please fill all required fields: Title, Category, Price, and Link to Picture."
      );
      return; 
    }

    const { id, ...dataToUpdate } = productData; 

    const docRef = doc(db, "Products", id);
      await updateDoc(docRef,dataToUpdate)
    alert (
      "The new product was saved successfully"
    )
  };

  useEffect(() => {
    setProductData(product);
  }, [product]);

  return (
    <Container component="main" sx={{ marginBottom: "50px"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow: "0 0 3px",
          backgroundColor: "#f8f9f9",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <InputLabel
            shrink
            htmlFor={`title-${product.id}`}
            sx={{ fontSize: "20px", color: "#191919", paddingBottom: "8px" }}
          >
            <strong>Title:</strong>
          </InputLabel>
          <TextField
            id={`title-${product.id}`}
            name={`title-${product.id}`}
            value={productData.title || ""}
            onChange={(e) =>
              setProductData({ ...productData, title: e.target.value })
            }
            fullWidth
          />

          <InputLabel
            shrink
            htmlFor={`category-${product.id}`}
            sx={{
              fontSize: "20px",
              color: "#191919",
              marginTop: "20px",
              paddingBottom: "8px",
            }}
          >
            <strong>Category:</strong>
          </InputLabel>
          <Select
            id={`category-${product.id}`}
            name={`category-${product.id}`}
            value={productData.category || ""}
            onChange={(e) =>
              setProductData({ ...productData, category: e.target.value })
            }
            fullWidth
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>

          <InputLabel
            shrink
            htmlFor={`description-${product.id}`}
            sx={{
              fontSize: "20px",
              color: "#191919",
              marginTop: "20px",
              paddingBottom: "8px",
            }}
          >
            <strong>Description:</strong>
          </InputLabel>
          <TextareaAutosize
            id={`description-${product.id}`}
            name={`description-${product.id}`}
            minRows={5}
            value={productData.description || ""}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
            style={{
              width: "100%",
              borderRadius: "6px",
              outlineColor: "#1976D3",
              borderColor: "lightgrey",
              marginBottom: "20px",
            }}
          />
          <Button
            id={`saveBtn-${product.id}`}
            variant="outlined"
            sx={{
              mt: 2,
              width: "100px",
              borderColor: "#E5BD4C",
              color: "#E5BD4C",
              border: "1px solid",
              "&:hover": {
                borderColor: "#E5BD4C",
                border: "1px solid",
              },
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>

        <Box sx={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <InputLabel
            shrink
            htmlFor={`price-${product.id}`}
            sx={{ fontSize: "20px", color: "#191919", paddingBottom: "8px" }}
          >
            <strong>Price:</strong>
          </InputLabel>
          <TextField
            type="number"
            id={`price-${product.id}`}
            name={`price-${product.id}`}
            value={productData.price || 0}
            onChange={(e) =>
              setProductData({ ...productData, price: +e.target.value })
            }
            fullWidth
          />
          <InputLabel
            shrink
            htmlFor={`inStock-${product.id}`}
            sx={{ fontSize: "20px", color: "#191919", paddingBottom: "8px", marginTop: "20px"}}
          >
            <strong>In Stock:</strong>
          </InputLabel>
          <TextField
            type="number"
            id={`inStock-${product.id}`}
            name={`inStock-${product.id}`}
            value={productData.inStock || 0}
            onChange={(e) =>
              setProductData({ ...productData, inStock: +e.target.value })
            }
            fullWidth
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "20px",
              paddingBottom: "8px",
            }}
          >
            <Box>
              <InputLabel
                shrink
                htmlFor={`linkToPic-${product.id}`}
                sx={{
                  fontSize: "20px",
                  color: "#191919",
                }}
              >
                <strong>Link to picture:</strong>
              </InputLabel>
              <TextField
                type="text"
                id={`linkToPic-${product.id}`}
                name={`linkToPic-${product.id}`}
                value={productData.linkToPic || ""}
                onChange={(e) =>
                  setProductData({ ...productData, linkToPic: e.target.value })
                }
                fullWidth
              />
            </Box>
            {productData.linkToPic && (
              <img
                src={productData.linkToPic} // Replace with your image URL
                alt="Example"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </Box>

          <InputLabel
            shrink
            htmlFor={`usersBuy-${product.id}`}
            sx={{
              fontSize: "20px",
              color: "#191919",
              marginTop: "20px",
              paddingBottom: "8px",
            }}
          >
            <strong>Bought By:</strong>
          </InputLabel>
          <TableComp
            id={`usersBuy-${product.id}`}
            headers={usersBuy.headers}
            data={usersBuy.data}
            columnsTypes={usersBuy.columnsTypes}
            sx={{ marginTop: "10px" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductComp;
