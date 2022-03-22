import { Box, Grid, Typography, Link } from "@mui/material";

const PopularLinks = (props) => {
  const links = [
    "Overview and History of the South Carolina State Budget",
    "Overview and History of the South Carolina State Budget",
    "Overview and History of the South Carolina State Budget",
    "Employer Contribution Trends",
    "Employer Contribution Trends - June 4, 2019",
    "Employer Contribution Trends - June 4, 2019",
    "Appropriation Bills and Acts",
    "Executive Budget Office State Agency Budget Plans(Requests)",
    "Executive Budget Office State Agency Budget Plans(Requests)",
  ];
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item width="100%" paddingTop={4}>
          <Typography
            align="left"
            variant="h4"
            fontWeight="bold"
            sx={{ color: props.headerColor, paddingTop: 1.5 }}
          >
            POPULAR SERVICES AND LINKS
          </Typography>
        </Grid>
        <Grid item width="100%">
          <Box style={{ backgroundColor: "#1B3A61", height: 6 }} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            {links.map((link, ind) => {
              return (
                <Grid
                  item
                  key={ind}
                  width="33%"
                  paddingTop={2}
                  paddingBottom={1}
                  paddingRight={2}
                >
                  <Link href="#">
                    <Typography color={props.linkColor} align="left">
                      {link}
                    </Typography>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PopularLinks;
