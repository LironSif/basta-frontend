
import { Product, ProductImage } from "../../Styles/SellerShop/SellerShop";
import ProductMeta from "./ProductMeta";



export default function SingleProduct({product, matches}){
    
    return (
       <>
           <Product>
            
            <ProductImage src= {product.image}/>
            <ProductMeta product={product} matches={matches}/>
            
        </Product>
            
       </>
    
    )
}