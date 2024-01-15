import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  NavbarContainer,
  NavbarHeader,
  MyList,
} from "../../Styles/Navbar/Navbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavigateLocation } from "../NavigateLocation";
import { useNavigate } from "react-router";
//import Actions from "./Actions";



export default function NavbarDT({matches, setIsClicked})  {
//const {setShowSearchBox}= useUIContext()
let navigate = useNavigate()
 return(
 <NavbarContainer  style={{width:"99vw"}} justifyContent={"space-between"}>
    <NavbarHeader variant="h4" onClick={()=>{
      setIsClicked(false)
      navigate("/")
    }}>BSTA</NavbarHeader>
    {/* <MyList type="row"> */}
  
      {/* <ListItemText primary="Location"/> */}
      
      <NavigateLocation/> 
      
        {/* </MyList> */}
        
  </NavbarContainer>
)
}
