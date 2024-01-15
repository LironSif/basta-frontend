import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../Styles/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { NavigateLocation } from "../NavigateLocation";
import { useNavigate } from "react-router";
//import MenuIcon from "@mui/icons-material/Menu"
//import Actions from "./Actions"
//import { useUIContext } from "../../Context/UI";


export default function NavbarMobile({matches , setIsClicked}){
let navigate = useNavigate()
  //const { setDrawerOpen, setShowSearchBox} = useUIContext();
    return (
          <NavbarContainer>
            
            <NavbarHeader textAlign={"center"} variant="h4"  onClick={()=>{
      setIsClicked(false)
      navigate("/")
    }}>BSTA</NavbarHeader>
            
           <NavigateLocation/>
          </NavbarContainer>
          
        )
}