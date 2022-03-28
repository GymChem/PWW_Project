import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, Typography, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { blue20 } from "../data/Globals";

const ScrollToTop = (props) => {
  const [show, setShow] = useState(props.showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > props.showBelow) {
      if (!show) {
        return setShow(true);
      }
    } else {
      if (show) {
        return setShow(false);
      }
    }
  };
  useEffect(() => {
    if (props.showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {show && (
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={1.5}
          paddingRight={12}
        >
          <Grid item paddingBottom={4}>
            <Button onClick={handleClick} aria-label="Scroll to top button">
              <Typography>Back to Top</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Fab
              aria-label="Back to Top Floating Button"
              size="medium"
              onClick={handleClick}
              sx={{
                zIndex: 2,
                backgroundColor: blue20 + "4D",
                position: "fixed",
                bottom: "8vh",
                "&hover, &.Mui-focusVisible": {
                  transition: ".3s",
                },
                right: "5%",
              }}
            >
              <KeyboardArrowUpIcon sx={{ color: blue20 }} />
            </Fab>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ScrollToTop;
