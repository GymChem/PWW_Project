import { Button, Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { events } from "../data/TestData";
import {
  blue50,
  gold30,
  white20,
  black,
  yellow30,
  red70,
} from "../data/Globals";
import { CustomButton } from "./MenuButton";

const EventsCalendar = () => {
  const boxColorFunc = (status) => {
    if (status === "Updated") {
      return yellow30;
    } else if (status === "Cancelled") {
      return red70;
    }
  };
  const textColorFunc = (status) => {
    if (status === "Updated") {
      return black;
    } else if (status === "Cancelled") {
      return white20;
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
          <Typography variant="h5" fontWeight="bold" sx={{ color: blue50 }}>
            Calendar of Events
          </Typography>
        </Grid>
        <Grid item width="6%" paddingBottom={4}>
          <Box
            style={{
              backgroundColor: gold30,
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
                          backgroundColor: gold30,
                          color: white20,
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
                          <Grid item>
                            <Box
                              sx={{
                                backgroundColor: boxColorFunc(
                                  event.updateStatus
                                ),
                                width: "fit-content",
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
                          <Grid container direction="row" wrap="nowrap">
                            <Grid item>
                              <LocationOnIcon sx={{ color: gold30 }} />
                            </Grid>
                            <Grid item>
                              <Typography align="left">
                                {event.location}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <QueryBuilderIcon sx={{ color: gold30 }} />
                            <Typography>{event.time}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <PhoneIphoneIcon sx={{ color: gold30 }} />
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
          <CustomButton
            buttonDisplay="View all Events"
            ariaLabel="View all events button"
            size="medium"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EventsCalendar;
