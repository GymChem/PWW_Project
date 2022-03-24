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
import {
  headerColor,
  goldHighlight,
  lightBlack,
  offWhite,
} from "../data/Globals";
import classes from "../UI/Links.module.css";

const MyList = () => {
  return (
    <List>
      <Grid container direction="row">
        <Grid item sx={{ backgroundColor: offWhite }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {mainNav.map((nav, ind) => {
              return (
                <Grid item key={ind} sx={{ width: 250 }} color={headerColor}>
                  <ListItem>
                    <NavLink className={classes.navlink} to={nav.link}>
                      <Typography
                        sx={{ width: "100%" }}
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
        <Grid item paddingLeft={4} paddingTop={1}>
          <Grid container direction="row">
            {allNavOptions.map((navSection, sectionInd) => {
              return (
                <Grid item width="33%" key={sectionInd + 10} padding={1}>
                  <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                    color={headerColor}
                  >
                    <NavLink
                      to={navSection.mainLink}
                      className={classes.navlink}
                    >
                      <Typography color={headerColor} fontWeight="bold">
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
                            <Typography color={lightBlack}>
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
