import {
  Box,
  List,
  ListItem,
  Typography,
  Divider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { mainNav, allNavOptions } from "../data/TestData";
import { NavLink } from "react-router-dom";
import { blue50, gold30, grey90, white30 } from "../data/Globals";
import classes from "../UI/Links.module.css";

const MyList = (props) => {
  return (
    <List>
      <Grid
        container
        direction={!props.mobileView ? "row" : "column"}
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid
          item
          sx={{ backgroundColor: white30 }}
          sx={{ width: !props.mobileView ? "fit-content" : "100%" }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {mainNav.map((nav, ind) => {
              return (
                <Grid item key={ind} color={blue50}>
                  <ListItem>
                    <NavLink className={classes.navlink} to={nav.link}>
                      <Typography
                        color={grey90}
                        fontWeight="bold"
                        align="center"
                        variant="h6"
                      >
                        {nav.name}
                      </Typography>
                    </NavLink>
                  </ListItem>
                  {ind !== mainNav.length - 1 && <Divider />}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item paddingTop={1} border={1}>
          <Grid container direction="row" justifyContent="flex-start">
            {!props.mobileView &&
              allNavOptions.map((navSection, sectionInd) => {
                return (
                  <Grid
                    item
                    sx={{ width: props.desktopView ? "33%" : "50%" }}
                    key={sectionInd + 10}
                    padding={1}
                  >
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-start"
                      sx={{ minWidth: "fit-content" }}
                      color={blue50}
                    >
                      <NavLink
                        to={navSection.mainLink}
                        className={classes.navlink}
                      >
                        <Typography
                          align="left"
                          color={blue50}
                          fontWeight="bold"
                        >
                          {navSection.title}
                        </Typography>
                      </NavLink>
                      <Box
                        style={{
                          backgroundColor: gold30,
                          height: 4,
                          width: "15%",
                          marginBottom: 8,
                        }}
                      />
                      {navSection.subsection.map((item, itemInd) => {
                        return (
                          <Grid key={itemInd + 100}>
                            <NavLink
                              to={item.subLink}
                              className={classes.navlink}
                            >
                              <Typography align="left" color={grey90}>
                                {item.subtitle}
                              </Typography>
                            </NavLink>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                );
              })}
            {props.mobileView &&
              allNavOptions.map((navSection, i) => {
                return (
                  <Grid item key={i} width="100%">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <NavLink
                          to={navSection.mainLink}
                          className={classes.navlink}
                        >
                          <Typography
                            align="left"
                            color={blue50}
                            fontWeight="bold"
                          >
                            {navSection.title}
                          </Typography>
                        </NavLink>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="column">
                          {navSection.subsection.map((item, itemInd) => {
                            return (
                              <Grid key={itemInd + 100}>
                                <NavLink
                                  to={item.subLink}
                                  className={classes.navlink}
                                >
                                  <Typography align="left" color={grey90}>
                                    {item.subtitle}
                                  </Typography>
                                </NavLink>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </List>
  );
};

const NavMenu = (props) => {
  return (
    <>
      <Box
        onClose={props.handleDrawerClose}
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
            boxSizing: "border-box",
            alignItems: "center",
            height: "100%",
          },
        }}
        variant="temporary"
        anchor="bottom"
        open={props.open}
      >
        <MyList mobileView={props.mobileView} />
      </Box>
    </>
  );
};

export default NavMenu;
