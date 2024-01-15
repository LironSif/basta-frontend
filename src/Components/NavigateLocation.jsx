import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";

export const NavigateLocation = () => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendPositionToServer, showError);
    } else {
      console.error(error);
    }
  };
  const sendPositionToServer = (position) => {
    const data = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    fetch("https://basta-2zr3.onrender.com/api/v1/users/location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => window.open(data.googleMapsUrl, "_blank"))
      .catch((error) => console.error("Error:", error));
  };
  const showError = error => console.error(error);
  return (
    <NavigationIcon
      onClick={() => getLocation()}
      style={{ color: "green", fontSize: 25, transform: "rotate(45deg)", marginRight: "100px"}}
    />
  );
};
