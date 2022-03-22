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
import { headerColor, goldHighlight } from "../data/Globals";

const MyList = (props) => {
  return (
    <Box sx={{ height: "20%" }}>
      <List>
        <Grid container direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              {mainNav.map((nav, ind) => {
                return (
                  <Grid item sx={{ width: 250 }}>
                    <ListItem key={`mainNav ${ind}`}>
                      <Typography fontWeight="bold" align="center" variant="h6">
                        {nav}
                      </Typography>
                    </ListItem>
                    {ind !== mainNav.length - 1 && <Divider />}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item border={1}>
            <Grid container direction="row">
              {allNavOptions.map((navSection, sectionInd) => {
                return (
                  <Grid item width="33%" key={sectionInd}>
                    <Grid container direction="column">
                      <Typography color={headerColor} fontWeight="bold">
                        {navSection.title}
                      </Typography>
                      <Box
                        style={{
                          backgroundColor: goldHighlight,
                          height: 4,
                          width: "15%",
                        }}
                      />
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </List>
    </Box>
  );
};

const NavMenu = (props) => {
  return (
    <>
      <Drawer
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
      </Drawer>
    </>
  );
};

export default NavMenu;
