//import { ThemeProvider } from "@mui/system"
import {Box, Container, Typography } from "@mui/material"
import Navbar from "./Components/Navbar"
import SellerShop from "./Page/SellerShop/SellerShop"
function App() {

  return(
    
    // <Container maxWidth="xl"
    // sx={{
    //   background:'#fff'
    // }}
    // >
    
    // {/* <Navbar/> 
    
    // <Box display="flex"
    //     justifyContent={"center"}
    //     sx={{p:4}}    
    // >
    //   <Typography variant="h4">Peoples Products</Typography>
    // </Box> */}
    <SellerShop/>
    // </Container>
       
  )

}

export default App
