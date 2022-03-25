import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  Button,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NavMenu from "../UI/NavMenu";
import MenuButton from "./MenuButton";
import { NavLink } from "react-router-dom";
import { appBarLinks } from "../data/TestData";
import { buttonClickFill, buttonFill, white } from "../data/Globals";
import classes from "../UI/Tabs.module.css";
import NavSearchBar from "./NavSearchBar";

const CustomAppBar = (props) => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar open={open} position="static" sx={{ backgroundColor: white }}>
          <Toolbar disableGutters>
            <Grid container direction="column" justifyContent="flex-start">
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
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <Grid item>
                        <MenuButton open={open} setOpen={setOpen} />
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
                            sx={{ color: buttonClickFill }}
                            fontWeight="bold"
                            fontSize={14}
                          >
                            {" "}
                            SOUTH CAROLINA
                          </Typography>
                          <Typography
                            align="left"
                            fontSize={14}
                            sx={{ color: buttonClickFill }}
                            fontWeight="bold"
                          >
                            {" "}
                            REVENUE AND FISCAL AFFAIRS OFFICE
                          </Typography>
                          <Typography
                            fontSize={10}
                            sx={{ color: buttonClickFill, fontStyle: "italic" }}
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
                      justifyContent="center"
                    >
                      {props.desktopView && (
                        <header className={classes.header}>
                          <nav>
                            <ul>
                              {appBarLinks.map((link, i) => {
                                return (
                                  <Grid item key={i}>
                                    <NavLink
                                      to={link.link}
                                      className={classes.active}
                                    >
                                      <li>
                                        <Typography
                                          sx={{
                                            fontSize: 14,
                                            color: buttonClickFill,
                                          }}
                                        >
                                          {link.name}
                                        </Typography>
                                      </li>
                                    </NavLink>
                                  </Grid>
                                );
                              })}
                            </ul>
                          </nav>
                        </header>
                      )}
                      {!props.mobileView && (
                        <Grid item>
                          <Grid container direction="column">
                            <Grid item>
                              <Button
                                onClick={() => setSearchOpen(!searchOpen)}
                                size="small"
                                variant={!searchOpen ? "outlined" : "contained"}
                                sx={{
                                  backgroundColor: !searchOpen
                                    ? white
                                    : buttonFill,
                                  borderColor: buttonFill,
                                }}
                              >
                                <SearchIcon />
                              </Button>
                            </Grid>
                            {searchOpen && (
                              <Grid item>
                                <NavSearchBar />
                              </Grid>
                            )}
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {open && (
                <Grid item>
                  <NavMenu desktopView={props.desktopView} />
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default CustomAppBar;
