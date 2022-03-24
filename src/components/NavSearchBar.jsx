import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { buttonFill, white, buttonHoverFill } from "../data/Globals";

const NavSearchBar = () => {
  return (
    <>
      <Box
        padding={1}
        backgroundColor={buttonFill}
        sx={{
          height: "auto",
          width: "auto",
          marginTop: 6,
          position: "fixed",
          zIndex: 1,
          top: 0,
          right: 0,
          overflowX: "hidden",
          transition: "0.5s",
        }}
      >
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <TextField
              size="small"
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
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: white,
                borderColor: white,
                "&:hover": {
                  backgroundColor: buttonHoverFill,
                  borderColor: white,
                },
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default NavSearchBar;
