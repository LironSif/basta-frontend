import { Shop, ShopImage } from "../../Styles/ShopsPage/ShopsPage";
import ShopMeta from "./ShopMeta";

export default function SingleShop({ shop, matches }) {
  return (
    <>
      <Shop>
        <ShopImage src={`https://source.unsplash.com/200x200/?${shop.name}`} />
      </Shop>
      <ShopMeta shop={shop} matches={matches} />
    </>
  );
}
