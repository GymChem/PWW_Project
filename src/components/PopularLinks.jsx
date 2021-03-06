import { Box, Grid, Typography } from "@mui/material";
import { links } from "../data/TestData";
import { blue10, blue50 } from "../data/Globals";
import { NavLink } from "react-router-dom";
import classes from "../UI/Links.module.css";

const PopularLinks = (props) => {
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
            sx={{ color: blue50, paddingTop: 1.5 }}
          >
            POPULAR SERVICES AND LINKS
          </Typography>
        </Grid>
        <Grid item width="100%">
          <Box style={{ backgroundColor: blue50, height: 6 }} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction={!props.mobileView ? "row" : "column"}
            alignItems="center"
            justifyContent="flex-start"
          >
            {links.map((link, ind) => {
              return (
                <Grid
                  item
                  key={ind}
                  width={!props.mobileView ? "33%" : "100%"}
                  paddingTop={2}
                  paddingBottom={1}
                  paddingRight={2}
                  color={blue10}
                >
                  <NavLink to={link.link} className={classes.navlink}>
                    <Typography color={blue10} align="left">
                      {link.linkName}
                    </Typography>
                  </NavLink>
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
