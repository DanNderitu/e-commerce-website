import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
//import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
//import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function DrawerMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ boxShadow: "none" }}
        //className="font-extrabold"
        //variant="outlined"
        //color="neutral"
        //fontWeight=" bold"
      >
        <Menu />
      </IconButton>
      <div>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            //className="bg-orange-200"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              ml: "auto",
              mt: 1,
              mr: 2,
              //backgroundColor: "orange",
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: "pointer" }}
            >
              Close
            </Typography>
            <ModalClose id="close-icon" sx={{ position: "initial" }} />
          </Box>

          <List
            size="lg"
            component="nav"
            sx={{
              flex: "none",
              fontSize: "xl",
              "& > div": { justifyContent: "center" },
            }}
          >
            <ListItemButton sx={{ fontWeight: "lg" }}>
              <Link to="/">Home</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/livingroom">Livingroom</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/lighting">Lighting</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/kitchen">Kitchen</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/bathroom">Bathroom</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/bedroom">Bedroom</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/office">Office</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/outdoor">Outdoor</Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/breakroom">Breakroom</Link>
            </ListItemButton>
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
}
