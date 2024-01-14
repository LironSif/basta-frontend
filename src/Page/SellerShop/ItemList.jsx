import {Container, Grid, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
// import { products } from "../../Data"
import SingleProduct from "./SingleProduct"
import SingleProductDesktop from "./SingleProductDesktop"

import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemList(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "https://basta-2zr3.onrender.com/api/v1";

  useEffect(() => {
    fetchingItems();
  }, []);

  const fetchingItems = async () => {
    try {
      setError("")
      setLoading(true);
      const response = await axios.get(url + "/items");
      setProducts(response.data);
      setLoading(false)
    } catch (error) {
      setError(error);
    }
  };
  const theme= useTheme()
  const matches=
    useMediaQuery(theme.breakpoints.down('md'))
  const renderProducts = products.map(product=>(
    <Grid item key={product.id}

      sm={4}
      md={4}
      display='flex'
      flexDirection={"column"}
      alignItems="center">
      {matches? (<SingleProduct product={product} matches={matches}/>
      ):(<SingleProductDesktop product={product} matches={matches}/>
      )}
    </Grid>
  ))
  return(
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <Grid
          container
          spacing={{xs:2, md:3}}
          justifyContent={"center"}
          sx={{margin:'20px 4px 10 px 4px'}}
          columns={{xs:4,sm:8, md:12}}
        >
          {renderProducts}
        </Grid>
      )}
    </Container>
  )


}