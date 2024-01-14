import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../Styles/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
//import MenuIcon from "@mui/icons-material/Menu"
//import Actions from "./Actions"
//import { useUIContext } from "../../Context/UI";


export default function NavbarMobile({matches}){

  //const { setDrawerOpen, setShowSearchBox} = useUIContext();
    return (
          <NavbarContainer>
            
            <NavbarHeader textAlign={"center"} variant="h4">BSTA</NavbarHeader>
            
           
          </NavbarContainer>
          
        )
}