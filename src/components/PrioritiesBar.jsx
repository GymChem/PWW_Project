import { Grid, Paper, Avatar, Typography } from "@mui/material";
import { priorities } from "../data/TestData";
import { headerColor } from "../data/Globals";

const PrioritiesBar = (props) => {
  return (
    <>
      <Paper style={{ backgroundColor: "#CCCCCC" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {priorities.map((priority, ind) => {
            return (
              <Grid item key={ind} paddingTop={3} paddingBottom={3}>
                <Paper>
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
                        color: headerColor,
                        fontSize: 12,
                        paddingTop: 1.5,
                      }}
                    >
                      {priority.title}
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default PrioritiesBar;
