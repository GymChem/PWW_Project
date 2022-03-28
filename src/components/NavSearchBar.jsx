import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { blue20, white10, blue30 } from "../data/Globals";

const NavSearchBar = () => {
  return (
    <>
      <Box
        padding={1}
        backgroundColor={blue20}
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
              sx={{ backgroundColor: white10, width: "100%" }}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: white10,
                borderColor: white10,
                "&:hover": {
                  backgroundColor: blue30,
                  borderColor: white10,
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
