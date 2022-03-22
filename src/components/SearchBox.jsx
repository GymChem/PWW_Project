import { Button, Box, Paper, Grid, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const styles = {
  paperContainer: {
    backgroundImage: `url(assets/shutterstock_42474535.jpg)`,
    height: 387,
  },
};

const SearchBox = () => {
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
        <Grid item width="50%">
          <Typography variant="h6" style={{ color: "#F7F4ED" }}>
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
            sx={{ display: "flex" }}
          >
            <Grid item>
              <TextField
                label={
                  <Typography style={{ fontStyle: "italic" }}>
                    Search rfa.sc.gov
                  </Typography>
                }
                sx={{ backgroundColor: "#F3F6F9", width: "180%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Button
                aria-label="Search button"
                variant="contained"
                sx={{
                  backgroundColor: "#0074C1",
                  color: "#F7F4ED",
                }}
              >
                Search
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchBox;
