import { Button, Box, Paper, Grid, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { buttonFill, buttonText, white } from "../data/Globals";
import { CustomButton } from "./MenuButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  paperContainer: {
    backgroundImage: `url(assets/shutterstock_42474535.jpg)`,
    height: 387,
  },
};

const SearchBox = () => {
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("900"));
  const widthFunc = () => {
    console.log(desktopView);
    if (desktopView) {
      return "55%";
    } else return "75%";
  };
  return (
    <Paper style={styles.paperContainer}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        height="100%"
        width="100%"
      >
        <Grid item width={() => widthFunc()}>
          <Typography
            fontWeight="bold"
            variant="h5"
            style={{ color: buttonText }}
          >
            Providing independent research, analysis, and resources to
            facilitate informed policy decisions and adminstration of services
          </Typography>
        </Grid>
        <Grid item width={() => widthFunc()}>
          <Grid
            container
            direction={desktopView ? "row" : "column"}
            spacing={!desktopView ? 1 : 0}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item width="75%">
              <TextField
                label={
                  <Typography style={{ fontStyle: "italic" }}>
                    Search rfa.sc.gov
                  </Typography>
                }
                sx={{ backgroundColor: white, width: "100%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <CustomButton
                ariaLabel={"search button"}
                buttonDisplay={
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={0.75}
                  >
                    <Grid item> Search</Grid>
                    <Grid item>
                      {" "}
                      <SearchIcon />
                    </Grid>
                  </Grid>
                }
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchBox;
