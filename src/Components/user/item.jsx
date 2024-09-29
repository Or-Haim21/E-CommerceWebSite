import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ItemComp = ({ product, onAddToCart }) => {
  const users = useSelector((state) => state.users);
  const orders = useSelector((state) => state.orders);

  const [count, setCount] = useState(0);
  const [bought, setBought] = useState(0);
  const [inStockColor, setInStockColor] = useState();

  useEffect(()=>{
    setInStockColor(product.inStock > 0 ? "#191919" : "#F24949");
  },[product.inStock])

  useEffect(() => {
    let boughtAmount = 0;
    const currentProductOrders = orders.filter(
      (order) => order.product === product.title
    );
    currentProductOrders.map((order) => {
      const user = users.find((user) => user.username === order.username);
      if (user.shareOrders === true) {
        boughtAmount += 1;
      }
    });

    setBought(boughtAmount);
  }, [users, orders, users]);

  const handleAdd = () => {
    if (product.inStock > 0 && count < product.inStock)  {
      setCount(count + 1); 

    }
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (product.inStock <= 0) {
        alert('This product is not in stock');
        return;
    }
    const itemToAdd = {
      ...product,
      quantity: count,
    };
    onAddToCart(itemToAdd);
    setCount(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
          borderRadius: "20px",
          width: "350px",
          color: "#191919",
        }}
      >
        <CardMedia
          component="img"
          height="350px"
          image={product.linkToPic}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{product.title}</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body2">Price: ${product.price}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="body2" sx={{ color: inStockColor }}>
                In stock: {product.inStock}
              </Typography>
              <Typography variant="body2">Bought: {bought}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                aria-label="remove"
                onClick={handleRemove}
                sx={{
                  color: "#18E19D",
                  "&:hover": {
                    color: "#9e9e9e",
                  },
                }}
              >
                <RemoveCircleOutlineOutlinedIcon fontSize="medium" />
              </IconButton>
              <Typography variant="body1" paddingRight={1} paddingLeft={1}>
                <strong>{count}</strong>
              </Typography>
              <IconButton
                aria-label="add"
                onClick={handleAdd}
                sx={{
                  color: "#18E19D",
                  "&:hover": {
                    color: "#9e9e9e",
                  },
                }}
              >
                <AddCircleOutlineOutlinedIcon fontSize="medium" />
              </IconButton>
            </Box>
            <Box>
              <Tooltip title="Add To Cart" arrow>
                <IconButton
                  onClick={handleAddToCart}
                  aria-label="AddToCart"
                  sx={{
                    color: "#18E19D",
                  }}
                >
                  <AddShoppingCartOutlinedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemComp;
