import { AppBar, Container, Grid, Typography, Avatar } from "@mui/material";
import { locations, bottomLinks } from "../data/TestData";
import { blue50, white10 } from "../data/Globals";
import { NavLink } from "react-router-dom";
import classes from "../UI/Links.module.css";

const Footer = (props) => {
  return (
    <AppBar
      position="static"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: blue50,
        padding: 2,
      }}
    >
      <Container>
        <Grid
          container
          direction={!props.mobileView ? "row" : "column"}
          spacing={2}
          alignItems="center"
          justifyContent={!props.mobileView ? "space-between" : "flex-start"}
        >
          <Grid item width={!props.mobileView ? "33" : "100%"}>
            <Grid container direction={!props.mobileView ? "column" : "row"}>
              <Grid item paddingBottom={2}>
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
          <Grid item width={!props.mobileView ? "33" : "100%"}>
            <Grid container direction="column">
              {bottomLinks.map((link, ind) => {
                return (
                  <Grid item key={ind}>
                    <NavLink className={classes.navlink} to={link.link}>
                      <Typography align="left" color={white10}>
                        {link.name}
                      </Typography>
                    </NavLink>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item width={!props.mobileView ? "33" : "100%"}>
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
