//import { ThemeProvider } from "@mui/system"
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import SellerShop from "./Page/SellerShop/SellerShop";
// import Preview from "./Page/Preview/Preview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Page/Homepage/Homepage";
// import ShopsPage from "./Page/ShopsPage/ShopsPage";
import { useState } from "react";
import { NavigateLocation } from "./Components/NavigateLocation";

function App() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <BrowserRouter>
        {isClicked &&  <Navbar />}
        <Routes>
          {!isClicked && <Route path="/" element={<Homepage setIsClicked={setIsClicked}/>} />}
          {/* <Route path="/preview" element={<Preview />} /> */}
          <Route path="/sellerList" element={<SellerShop />} />
          {/* <Route path="/shopsList" element={<ShopsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
