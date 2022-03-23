import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  buttonHoverFill,
  buttonClickFill,
  buttonFill,
  buttonText,
} from "../data/Globals";

const MenuButton = (props) => {
  return (
    <Button
      onClick={(e) => {
        if (e.type === "click") {
          props.setOpen(!props.open);
        }
      }}
      size="large"
      edge="start"
      aria-label="Open Nav Drawer"
      sx={{
        backgroundColor: buttonFill,
        color: buttonText,
        flexDirection: "column",
        mr: 2,
        "&:hover": {
          backgroundColor: buttonHoverFill,
        },
        "&:click": {
          backgroundColor: buttonClickFill,
        },
      }}
    >
      {!props.open ? (
        <>
          <MenuIcon aria-label="menu icon" />
          <Typography sx={{ fontSize: 10 }}>Menu</Typography>
        </>
      ) : (
        <>
          <CloseIcon aria-label="close icon" />
          <Typography sx={{ fontSize: 10 }}>Close</Typography>
        </>
      )}
    </Button>
  );
};

export default MenuButton;
