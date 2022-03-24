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
import { headerColor, goldHighlight } from "../data/Globals";
import classes from "../UI/Links.module.css";

const MyList = () => {
  return (
    <List>
      <Grid container direction="row">
        <Grid item sx={{ backgroundColor: "#E1E5EA" }}>
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
                        color="#333333"
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
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography color={headerColor} fontWeight="bold">
                      {navSection.title}
                    </Typography>
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
                          <Typography color="#333333">{item}</Typography>
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
