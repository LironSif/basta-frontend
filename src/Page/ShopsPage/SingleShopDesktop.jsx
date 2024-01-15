import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function SingleShopDesktop({ shop }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <Box
        style={{ margin: "5px" }}
        sx={{
          backgroundColor: shop.isOpen ? "green" : "red",
          width: 20,
          height: 20,
          borderRadius: 50,
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {shop.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <PhoneIcon
            color="primary"
            style={{ fontSize: 20, marginRight: 10, marginBottom: -5 }}
          />

          {shop.phoneNumber}
        </Typography>
      </CardContent>
      {/* Expandable section */}
      <IconButton
        style={{ marginLeft: "auto", marginBottom: "10px" }}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* Additional information goes here */}
          <Typography paragraph>{"moreInfo"}</Typography>
          <Typography variant="body2" color="text.secondary">
            reviews: {shop.reviews}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shop.language}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
