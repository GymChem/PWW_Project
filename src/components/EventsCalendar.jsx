import { Button, Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { events } from "../TestData";

const EventsCalendar = (props) => {
  const boxColorFunc = (status) => {
    if (status === "Updated") {
      return "#D2B859";
    } else if (status === "Cancelled") {
      return "#E9261D";
    }
  };
  const textColorFunc = (status) => {
    if (status === "Updated") {
      return "#000000";
    } else if (status === "Cancelled") {
      return "#F7F4ED";
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: props.headerColor }}
          >
            Calendar of Events
          </Typography>
        </Grid>
        <Grid item width="6%" paddingBottom={4}>
          <Box
            style={{
              backgroundColor: props.goldHighlight,
              height: 4,
            }}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={0.5}>
            {events.map((event, ind) => {
              return (
                <Grid item key={ind}>
                  <Grid container direction="row" spacing={1}>
                    <Grid item>
                      <Box
                        style={{
                          backgroundColor: props.goldHighlight,
                          color: "#F7F4ED",
                        }}
                      >
                        <Grid container direction="column" padding={1}>
                          <Grid item>
                            <Typography variant="h6">{event.month}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography fontWeight="bold" variant="h5">
                              {event.day}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" spacing={0.5}>
                        {event.updateStatus && (
                          <Grid item width="17%">
                            <Box
                              sx={{
                                backgroundColor: boxColorFunc(
                                  event.updateStatus
                                ),
                                color: textColorFunc(event.updateStatus),
                                align: "left",
                              }}
                            >
                              {event.updateStatus}
                            </Box>
                          </Grid>
                        )}
                        <Grid item>
                          <Typography align="left" fontWeight="bold">
                            {event.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <LocationOnIcon
                              sx={{ color: props.goldHighlight }}
                            />
                            <Typography>{event.location}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <QueryBuilderIcon
                              sx={{ color: props.goldHighlight }}
                            />
                            <Typography>{event.time}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <PhoneIphoneIcon
                              sx={{ color: props.goldHighlight }}
                            />
                            <Typography>{event.phoneNum}</Typography>
                          </Grid>
                        </Grid>
                        <Box
                          margin={1.5}
                          style={{
                            backgroundColor: "black",
                            height: 0.5,
                          }}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Button
            aria-label="View all events button"
            variant="contained"
            sx={{
              backgroundColor: props.buttonFill,
              color: props.buttonText,
            }}
          >
            {" "}
            VIEW ALL EVENTS
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EventsCalendar;
