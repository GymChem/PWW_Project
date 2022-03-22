import { Button, Box, Paper, Grid, Typography } from "@mui/material";

const PopularLinks = () => {
  return (
    <>
      <Typography
        align="left"
        variant="h5"
        fontWeight="bold"
        sx={{ color: "#1B3A61", paddingTop: 1.5 }}
      >
        Popular Services and Links
      </Typography>
      <Box
        border={1}
        style={{ backgroundColor: "#1B3A61", height: 4, width: "90%" }}
        height={20}
      />
    </>
  );
};

export default PopularLinks;
