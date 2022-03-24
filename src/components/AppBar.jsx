import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NavMenu from "../UI/NavMenu";
import MenuButton from "./MenuButton";
import { NavLink } from "react-router-dom";
import { appBarLinks } from "../data/TestData";
import { buttonClickFill } from "../data/Globals";

const CustomAppBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          open={open}
          position="static"
          sx={{ backgroundColor: "#F3F6F9" }}
        >
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
                      spacing={2}
                    >
                      {appBarLinks.map((link, i) => {
                        return (
                          <Grid item key={i}>
                            <NavLink to={link.link}>
                              <Typography
                                sx={{ fontSize: 14, color: buttonClickFill }}
                              >
                                {link.name}
                              </Typography>
                            </NavLink>
                          </Grid>
                        );
                      })}
                      {/* <Grid item>
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
                      </Grid> */}
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
    </>
  );
};

export default CustomAppBar;
