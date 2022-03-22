import { Grid, Paper, Avatar, Typography } from "@mui/material";

const PrioritiesBar = (props) => {
  const priorities = [
    {
      title: "DATA & RESEARCH",
      path: "assets/Data-Research-Icon.svg",
      alt: "data and research icon picture of bar graph",
    },
    {
      title: "GEOGRAPHY & MAPPING",
      path: "assets/Geography-Icon.svg",
      alt: "geography and mapping icon picture of a globe",
    },
    {
      title: "PROGRAMS & SERVICES",
      path: "assets/Programs-Icon.svg",
      alt: "programs and services icon list with first paragraphy highlighted",
    },
    {
      title: "LEGISLATIVE FISCAL IMPACTS",
      path: "assets/Legislative-Icon.svg",
      alt: "legislative fiscal impacts icon list picture of money bag and calculator",
    },
  ];
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
                        color: props.headerColor,
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
