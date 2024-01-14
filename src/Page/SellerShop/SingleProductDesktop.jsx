
import { Product, ProductImage } from "../../Styles/SellerShop/SellerShop";
import ProductMeta from "./ProductMeta";


export default function SingleProductDesktop({product, matches}){
    
    return (
       <>
           <Product>
            <ProductImage src= {product.image}/>
            
        </Product>
        <ProductMeta product={product} matches={matches}/>
       </>
    
    )
}