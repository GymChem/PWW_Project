import { Paper, Grid, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { white20, white10 } from "../data/Globals";
import { CustomButton } from "./MenuButton";

const styles = {
  paperContainer: {
    backgroundImage: `url(assets/shutterstock_42474535.jpg)`,
    height: 387,
  },
};

const SearchBox = (props) => {
  const widthFunc = () => {
    if (props.desktopView) {
      return "55%";
    } else return "75%";
  };
  return (
    <Paper
      style={styles.paperContainer}
      ariaLabel="picture of domed government building"
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        height="100%"
        width="100%"
      >
        <Grid item width={() => widthFunc()}>
          <Typography fontWeight="bold" variant="h5" style={{ color: white20 }}>
            Providing independent research, analysis, and resources to
            facilitate informed policy decisions and adminstration of services
          </Typography>
        </Grid>
        <Grid item width={() => widthFunc()}>
          <Grid
            container
            direction={props.desktopView ? "row" : "column"}
            spacing={!props.halfDesktopView ? 1 : 0}
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
                sx={{ backgroundColor: white10, width: "100%" }}
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
