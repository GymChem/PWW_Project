import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { mainNav, allNavOptions } from "../data/TestData";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  headerColor,
  goldHighlight,
  lightBlack,
  offWhite,
} from "../data/Globals";
import classes from "../UI/Links.module.css";

const MyList = (props) => {
  return (
    <List>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid
          item
          sx={{ backgroundColor: offWhite }}
          sx={{ width: "fit-content" }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {mainNav.map((nav, ind) => {
              return (
                <Grid item key={ind} color={headerColor}>
                  <ListItem>
                    <NavLink className={classes.navlink} to={nav.link}>
                      <Typography
                        color={lightBlack}
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
            {allNavOptions.map((navSection, sectionInd) => {
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
                    color={headerColor}
                  >
                    <NavLink
                      to={navSection.mainLink}
                      className={classes.navlink}
                    >
                      <Typography
                        align="left"
                        color={headerColor}
                        fontWeight="bold"
                      >
                        {navSection.title}
                      </Typography>
                    </NavLink>
                    <Box
                      style={{
                        backgroundColor: goldHighlight,
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
                            <Typography align="left" color={lightBlack}>
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
        <MyList />
      </Box>
    </>
  );
};

export default NavMenu;
