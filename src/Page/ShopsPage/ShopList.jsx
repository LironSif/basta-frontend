import {Container, Grid, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
// import {products} from "../../Data"
import SingleShop from "./SingleShop"
import SingleShopDesktop from "./SingleShopDesktop"
import axios from "axios"

export default function ShopList(){
    const theme= useTheme()
    const matches=
         useMediaQuery(theme.breakpoints.down('md'))
         const renderShops= products.map(product=>(
            <Grid item key={product.id}
    
    sm={4}
    md={4}
    display='flex' 
    flexDirection={"column"}
    alignItems="center">
        {matches? (<SingleShop product={product} matches={matches}/>
        ):(<SingleShopDesktop product={product} matches={matches}/>
     )}
    </Grid>
         ))

         return(
            <Container>
                <Grid
                  container
                  spacing={{xs:2, md:3}}
                  justifyContent={"center"}
                  sx={{margin:'20px 4px 10 px 4px'}}
                  columns={{xs:4,sm:8, md:12}}
                  >
                    {renderShops}
                  </Grid>
                  {console.log(products)}
            </Container>

        )
}