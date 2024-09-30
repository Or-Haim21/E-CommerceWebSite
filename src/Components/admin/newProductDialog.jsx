import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { addDocument } from '../../firebaseServices'

const NewProductDialogComp = ({ open, handleClose, categories }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    linkToPic: "",
    inStock: 0,
  });

  const handleSave = async () => {
    if (!newProduct.title || !newProduct.category || !newProduct.price || !newProduct.linkToPic) {
        alert("Please fill all required fields.");
        return;
    }
    await addDocument("Products", newProduct);
    handleClose();
    setNewProduct({
        title: "",
        category: "",
        description: "",
        price: 0,
        linkToPic: "",
        inStock: 0,
    });
};

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"  
          label="Title"
          fullWidth
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />

        {/* Category Dropdown */}
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          label="Description"
          fullWidth
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: +e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="In Stock"
          type="number"
          fullWidth
          value={newProduct.inStock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, inStock: +e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Link to Picture"
          fullWidth
          value={newProduct.linkToPic}
          onChange={(e) =>
            setNewProduct({ ...newProduct, linkToPic: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewProductDialogComp;
