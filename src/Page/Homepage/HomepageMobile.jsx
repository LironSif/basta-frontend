import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

export default function HomepageMobile({ setIsClicked }) {
  let navigate = useNavigate();
  return (
    <Box
      style={{ maxWidth: "500px"}} 
      margin={"auto"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      fontSize={40} 
    >
      <Box
        style={{ width: "250px" , cursor: "pointer"}} 
        onClick={() => {
          setIsClicked(true);
          navigate("/instruction/seller");
        }}
      >
        Seller
      </Box>
      <Box
        style={{ width: "250px" , cursor: "pointer"}}
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
