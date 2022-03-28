import { Grid, Paper, Avatar, Typography, Link } from "@mui/material";
import { priorities } from "../data/TestData";
import { NavLink } from "react-router-dom";
import { blue50, blue40, grey10 } from "../data/Globals";

const PrioritiesBar = () => {
  return (
    <>
      <Paper style={{ backgroundColor: grey10 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {priorities.map((priority, ind) => {
            return (
              <Grid item key={ind} paddingTop={3} paddingBottom={3}>
                <NavLink to="/placeholder">
                  <Paper
                    sx={{
                      "&:hover": {
                        color: blue40,
                        border: 2,
                      },
                    }}
                  >
                    <Grid
                      container
                      padding={2.5}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      sx={{ width: 150 }}
                    >
                      <Avatar
                        variant="square"
                        sx={{ width: "60%", height: "60%" }}
                        alt={priority.alt}
                        src={priority.path}
                      />
                      <Typography
                        fontWeight="bold"
                        sx={{
                          color: blue50,
                          fontSize: 12,
                          paddingTop: 1.5,
                        }}
                      >
                        {priority.title}
                      </Typography>
                    </Grid>
                  </Paper>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default PrioritiesBar;
