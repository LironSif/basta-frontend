import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

export default function HomepageDesktop({ setIsClicked }) {
  let navigate = useNavigate();
  return (
    <Box
      style={{ width: "85vw" , height:"80vh"}}
      margin={"auto"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      fontSize={40}
    >
      <Box
        style={{ width: "50vw", cursor: "pointer" }}
        onClick={() => {
          setIsClicked(true);
          navigate("/instruction/seller");
        }}
      >
        Seller
      </Box>
      <Box
        style={{ width: "50vw", cursor: "pointer" }}
        onClick={() => {
          setIsClicked(true);
          navigate("/instruction/buyer");
        }}
      >
        User
      </Box>
    </Box>
  );
}
