import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import HomepageMobile from "./HomepageMobile";
import HomepageDesktop from "./HomepageDesktop";
import { useTheme } from "@mui/material/styles";

export default function Homepage({ setIsClicked }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      {matches ? (
        <HomepageMobile setIsClicked={setIsClicked} />
      ) : (
        <HomepageDesktop setIsClicked={setIsClicked} />
      )}
    </Container>
  );
}
