import { Typography } from "@mui/material";
import { ShopMetaWrapper } from "../../Styles/ShopsPage/ShopsPage";

export default function ShoptMeta({product, matches}){
    return(
        <ShopMetaWrapper>
            <Typography 
            variant={matches? "h6":"h5"}
            lineHeight={2}>
             {product?.name}   
            </Typography>

            <Typography 
            variant={matches? "caption":"body1"}>
                ${product?.price}
            </Typography>    
            {console.log(product)}
        </ShopMetaWrapper>
    )
}