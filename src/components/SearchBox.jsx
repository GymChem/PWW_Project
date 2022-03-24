import { Button, Box, Paper, Grid, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { buttonFill, buttonText, white } from "../data/Globals";
import { CustomButton } from "./MenuButton";

const styles = {
  paperContainer: {
    backgroundImage: `url(assets/shutterstock_42474535.jpg)`,
    height: 387,
  },
};

const SearchBox = (props) => {
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
        <Grid item width="65%">
          <Typography
            fontWeight="bold"
            variant="h4"
            style={{ color: buttonText }}
          >
            Providing independent research, analysis, and resources to
            facilitate informed policy decisions and adminstration of services
          </Typography>
        </Grid>
        <Grid item width="50%">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item width="65%">
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
