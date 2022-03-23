import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  buttonHoverFill,
  buttonClickFill,
  buttonFill,
  buttonText,
} from "../data/Globals";

export const CustomButton = (props) => {
  return (
    <Button
      onClick={props.onClickFunction}
      size={props.size}
      aria-label={props.ariaLabel}
      sx={{
        backgroundColor: buttonFill,
        color: buttonText,
        mr: 2,
        "&:hover": {
          backgroundColor: buttonHoverFill,
        },
        "&:active": {
          backgroundColor: buttonClickFill,
        },
      }}
    >
      {props.buttonDisplay}
    </Button>
  );
};

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
        height: 65,
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
