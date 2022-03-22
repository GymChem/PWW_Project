import styled from "@emotion/styled";
import { AppBar, Container, Grid, Typography, Avatar } from "@mui/material";

const Footer = (props) => {
  const bottomLinks = [
    { name: "Privacy Statement" },
    { name: "FOIA" },
    { name: "Disclosures and Reporting" },
    { name: "Report Fraud" },
    { name: "Accessibility" },
    { name: "Contact Us" },
  ];
  const locations = [
    {
      place: "MAIN OFFICE",
      address:
        "1000 Assembly Street Rembert Dennis Building Suite 421 Columbia, SC 29201",
      phone: "(803) 734-3793",
    },
    {
      place: "GEODETIC SURVERY SECTION",
      address: "5 Geology Road Columbia, SC 29212",
    },
    {
      place: "HEALTH AND DEMOGRAPHICS DIVISION",
      address:
        "1000 Assembly Street Rembert Dennis Building, Suite 240 Columbia, SC 29201",
    },
  ];
  return (
    <AppBar
      position="static"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: props.headerColor,
        padding: 2,
      }}
    >
      <Container>
        <Grid
          container
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item width="33%">
            <Grid container direction="column">
              <Grid item>
                <Typography align="left" variant="h6" fontWeight="bold">
                  South Carolina
                </Typography>
                <Typography align="left" variant="h6" fontWeight="bold">
                  Revenue and Fiscal Affairs Office
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  alt="revenue and fiscal affairs logo"
                  sx={{ width: 70, height: 70 }}
                  src="/assets/Group_262.png"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item width="33%">
            <Grid container direction="column">
              {bottomLinks.map((link, ind) => {
                return (
                  <Grid item key={ind}>
                    <Typography align="left" color="#F3F6F9">
                      {link.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item width="33%">
            <Grid container direction="column" spacing={1}>
              {locations.map((location, ind) => {
                return (
                  <Grid item key={ind}>
                    <Typography fontWeight="bold" fontSize={12} align="left">
                      {location.place}
                    </Typography>
                    <Typography fontSize={10} align="left">
                      {location.address}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Footer;
