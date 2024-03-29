import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../Styles/SellerShop/SellerShop";

export default function ProductMeta({product, matches}){
    return(
        <ProductMetaWrapper>
            <Typography 
            variant={matches? "h6":"h5"}
            lineHeight={2}>
             {product.item}   
            </Typography>

            <Typography 
            variant={matches? "caption":"body1"}>
                {product.price} <sub>{product.unit}</sub>
            </Typography>    
        </ProductMetaWrapper>
    )
}