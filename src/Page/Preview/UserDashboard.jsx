// import React, { useState } from 'react';
// import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// const initialProducts = [
//   { id: 1, name: 'Product A', price: 20 },
//   { id: 2, name: 'Product B', price: 30 },
//   // Add more initial products as needed
// ];

// const UserDashboard = () => {
//   const [products, setProducts] = useState(initialProducts);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '' });
//   const [editProduct, setEditProduct] = useState(null);

//   const handleAddProduct = () => {
//     if (newProduct.name && newProduct.price) {
//       setProducts([...products, { id: Date.now(), ...newProduct }]);
//       setNewProduct({ name: '', price: '' });
//     }
//   };

//   const handleDeleteProduct = (productId) => {
//     const updatedProducts = products.filter((product) => product.id !== productId);
//     setProducts(updatedProducts);
//   };

//   const handleEditProduct = (productId) => {
//     const productToEdit = products.find((product) => product.id === productId);
//     setEditProduct(productToEdit);
//   };

//   const handleUpdateProduct = () => {
//     if (editProduct && editProduct.name && editProduct.price) {
//       const updatedProducts = products.map((product) =>
//         product.id === editProduct.id ? { ...editProduct } : product
//       );
//       setProducts(updatedProducts);
//       setEditProduct(null);
//     }
//   };

//   return (
//     <div>
//       <h2>User Dashboard</h2>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell>{product.id}</TableCell>
//                 <TableCell>{editProduct?.id === product.id ? (
//                   <TextField
//                     value={editProduct.name}
//                     onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
//                   />
//                 ) : product.name}</TableCell>
//                 <TableCell>{editProduct?.id === product.id ? (
//                   <TextField
//                     value={editProduct.price}
//                     onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
//                   />
//                 ) : product.price}</TableCell>
//                 <TableCell>
//                   {editProduct?.id === product.id ? (
//                     <Button onClick={handleUpdateProduct}>Update</Button>
//                   ) : (
//                     <>
//                       <IconButton onClick={() => handleEditProduct(product.id)}>
//                         <EditIcon />
//                       </IconButton>
//                       <IconButton onClick={() => handleDeleteProduct(product.id)}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <div>
//         <h3>Add New Product</h3>
//         <TextField
//           label="Name"
//           value={newProduct.name}
//           onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//         />
//         <TextField
//           label="Price"
//           value={newProduct.price}
//           onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//         />
//         <Button onClick={handleAddProduct}>Add Product</Button>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Microphone from "../../Components/Microphone";

const initialProducts = [
  
   
  {item: 'Fresh Tomatoes', price: '5 ILS', unit: 'per kilogram', image: 'URL placeholder for Fresh Tomatoes'},
  
   
  {item: 'Crisp Cucumbers', price: '3 ILS', unit: 'each', image: 'URL placeholder for Crisp Cucumbers'},
  
   
  {item: 'Juicy Apples', price: '4 ILS', unit: 'per kilogram', image: 'URL placeholder for Juicy Apples'},
  
   
  {item: 'Sweet Oranges', price: '3 ILS', unit: 'per kilogram', image: 'URL placeholder for Sweet Oranges'}
  
  // Add more initial products as needed
];

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
});

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, { id: Date.now(), ...newProduct }]);
      setNewProduct({ name: "", price: "" });
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditProduct(productToEdit);
  };

  const handleUpdateProduct = () => {
    if (editProduct && editProduct.name && editProduct.price) {
      const updatedProducts = products.map((product) =>
        product.id === editProduct.id ? { ...editProduct } : product
      );
      setProducts(updatedProducts);
      setEditProduct(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#b5e7a0",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, md: 4 },
        }}
      >
        <Container component="main" maxWidth="md">
              <Typography variant="h4" align="center" gutterBottom>
                User Dashboard
              </Typography>
            <Box my={4}>
          {products.length == 0 ? (
            <Microphone setProducts={setProducts} />
          ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {products.map((product , index) => (
                      <TableRow key={index + 1}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          {editProduct?.id === index ? (
                            <TextField
                              value={editProduct.item}
                              onChange={(e) =>
                                setEditProduct({
                                  ...editProduct,
                                  name: e.target.value,
                                })
                              }
                            />
                          ) : (
                            product.item
                          )}
                        </TableCell>
                        <TableCell>
                          {editProduct?.id === index + 1  ? (
                            <TextField
                              value={editProduct.price}
                              onChange={(e) =>
                                setEditProduct({
                                  ...editProduct,
                                  price: e.target.value,
                                })
                              }
                            />
                          ) : (
                            product.price
                          )}
                        </TableCell>
                        <TableCell>
                          {editProduct?.id === index + 1 ? (
                            <Button
                              variant="contained"
                              onClick={handleUpdateProduct}
                            >
                              Update
                            </Button>
                          ) : (
                            <>
                              <IconButton
                                onClick={() => handleEditProduct(index + 1)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                onClick={() => handleDeleteProduct(index + 1)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
)}
              <Box mt={4}>
                <Typography variant="h5" align="center" gutterBottom>
                  Add New Product
                </Typography>
                <TextField
                  label="Name"
                  fullWidth
                  value={newProduct.item}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, item: e.target.value })
                  }
                />
                <TextField
                  label="Price"
                  fullWidth
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
                <Box mt={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddProduct}
                  >
                    Add Product
                  </Button>
                </Box>
              </Box>
            </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UserDashboard;
