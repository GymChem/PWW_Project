import { Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { blue30, blue40, blue20, white20 } from "../data/Globals";

export const CustomButton = (props) => {
  return (
    <Button
      onClick={props.onClickFunction}
      size={props.size}
      aria-label={props.ariaLabel}
      sx={{
        backgroundColor: blue20,
        color: white20,
        mr: 2,
        "&:hover": {
          backgroundColor: blue30,
        },
        "&:active": {
          backgroundColor: blue40,
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
        backgroundColor: blue20,
        color: white20,
        flexDirection: "column",
        mr: 2,
        "&:hover": {
          backgroundColor: blue30,
        },
        "&:click": {
          backgroundColor: blue40,
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
