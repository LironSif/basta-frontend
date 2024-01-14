import { Shop, ShopImage } from "../../Styles/ShopsPage/ShopsPage";
import ShopMeta from "./ShopMeta";


export default function SingleShopDesktop({shop, matches}){
    
    return (
       <>
           <Shop>
            <ShopImage src= {shop?.image}/>
            
        </Shop>
        <ShopMeta shop={shop} matches={matches}/>
       </>
    
    )
}