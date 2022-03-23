import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  IconButton,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import NavMenu from "../UI/NavMenu";
import { headerColor } from "../data/Globals";

const CustomAppBar = (props) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          open={open}
          position="static"
          sx={{ backgroundColor: "#F3F6F9" }}
        >
          <Toolbar>
            <Grid container direction="column">
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Grid item>
                        <Button
                          onClick={(e) => {
                            if (e.type === "click") {
                              setOpen(!open);
                            }
                          }}
                          size="large"
                          edge="start"
                          aria-label="Open Drawer"
                          sx={{
                            backgroundColor: "#0074C1",
                            color: "#F7F4ED",
                            flexDirection: "column",
                            mr: 2,
                            //   ...(open && { display: "none" }),
                          }}
                        >
                          {!open ? (
                            <>
                              <MenuIcon aria-label="menu icon" />
                              <Typography sx={{ fontSize: 10 }}>
                                Menu
                              </Typography>
                            </>
                          ) : (
                            <>
                              <CloseIcon aria-label="close icon" />
                              <Typography sx={{ fontSize: 10 }}>
                                Close
                              </Typography>
                            </>
                          )}
                        </Button>
                      </Grid>
                      <Grid item paddingRight={2}>
                        <Avatar
                          alt="revenue and fiscal affairs logo"
                          sx={{ width: 55, height: 55 }}
                          src="/assets/RFA_Logo.png"
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="column"
                          alignItems="flex-start"
                          justifyContent="center"
                        >
                          <Typography
                            align="left"
                            sx={{ color: "#225089" }}
                            fontWeight="bold"
                            fontSize={14}
                          >
                            {" "}
                            SOUTH CAROLINA
                          </Typography>
                          <Typography
                            align="left"
                            fontSize={14}
                            sx={{ color: "#225089" }}
                            fontWeight="bold"
                          >
                            {" "}
                            REVENUE AND FISCAL AFFAIRS OFFICE
                          </Typography>
                          <Typography
                            fontSize={10}
                            sx={{ color: "#225089", fontStyle: "italic" }}
                          >
                            {" "}
                            Transforming data into solutions for South Carolina
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Grid item>
                        <Button label="about us button">
                          <Typography sx={{ fontSize: 12, color: "#225089" }}>
                            About Us
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button label="events button">
                          <Typography sx={{ fontSize: 12, color: "#225089" }}>
                            Events
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button label="boards and committees button">
                          <Typography sx={{ fontSize: 12, color: "#225089" }}>
                            {"Boards & Committees"}
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          size="small"
                          variant="outlined"
                          sx={{
                            color: "#0074C1",
                            borderColor: "#0074C1",
                          }}
                        >
                          <SearchIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {open && (
                <Grid item>
                  <NavMenu />
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <NavMenu
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
        setOpen={setOpen}
      /> */}
    </>
  );
};

export default CustomAppBar;
