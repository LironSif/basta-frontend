import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import {shops} from "../../Data"
import SingleShop from "./SingleShop";
import SingleShopDesktop from "./SingleShopDesktop";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShopList() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "https://basta-2zr3.onrender.com/api/v1";

  useEffect(() => {
    fetchingItems();
  }, []);

  const fetchingItems = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get(url + "/users");
      setShops(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderShops = shops.map((shop) => (
    <Grid
      item
      key={shop.id}
      style={{ width: "99vw" }}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      margin={"auto"}
      alignItems="center"
    >
      {matches ? (
        <SingleShop shop={shop} matches={matches} />
      ) : (
        <SingleShopDesktop shop={shop} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={"center"}
          sx={{ margin: "20px 4px 10 px 4px" }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderShops}
        </Grid>
      )}
    </Container>
  );
}
