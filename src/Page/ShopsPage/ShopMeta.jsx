import { Typography } from "@mui/material";
import { ShopMetaWrapper } from "../../Styles/ShopsPage/ShopsPage";
import { Box } from "@mui/system";

export default function ShopMeta({ shop, matches }) {
  return (
    <ShopMetaWrapper>
      <Box
        style={{ margin: "5px" }}
        sx={{
          backgroundColor: shop.isOpen ? "green" : "red",
          width: 20,
          height: 20,
          borderRadius: 50,
        }}
      />
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {shop?.name}
      </Typography>

    </ShopMetaWrapper>
  );
}
