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
//import Actions from "./Actions";



export default function NavbarDT({matches})  {
//const {setShowSearchBox}= useUIContext()
 return(
 <NavbarContainer>
    <NavbarHeader variant="h4">BSTA</NavbarHeader>
    <MyList type="row">
  
      <ListItemText primary="Location"/>
      
      
      
        </MyList>
        
  </NavbarContainer>
)
}
