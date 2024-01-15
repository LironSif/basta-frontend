import { Product, ProductImage } from "../../Styles/SellerShop/SellerShop";
import ProductMeta from "./ProductMeta";

export default function SingleProduct({ product, matches }) {
  return (
    <>
      <Product>
        <ProductImage
          src={`https://source.unsplash.com/200x200/?${product.item}`}
        />
        <ProductMeta product={product} matches={matches} />
      </Product>
    </>
  );
}
