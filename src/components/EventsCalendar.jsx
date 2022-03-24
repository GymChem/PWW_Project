import { Button, Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { events } from "../data/TestData";
import {
  headerColor,
  goldHighlight,
  buttonFill,
  buttonText,
  black,
  yellow,
  crimson,
} from "../data/Globals";
import { CustomButton } from "./MenuButton";

const EventsCalendar = (props) => {
  const boxColorFunc = (status) => {
    if (status === "Updated") {
      return yellow;
    } else if (status === "Cancelled") {
      return crimson;
    }
  };
  const textColorFunc = (status) => {
    if (status === "Updated") {
      return black;
    } else if (status === "Cancelled") {
      return buttonText;
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
            sx={{ color: headerColor }}
          >
            Calendar of Events
          </Typography>
        </Grid>
        <Grid item width="6%" paddingBottom={4}>
          <Box
            style={{
              backgroundColor: goldHighlight,
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
                          backgroundColor: goldHighlight,
                          color: buttonText,
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
                          <Grid container direction="row">
                            <LocationOnIcon sx={{ color: goldHighlight }} />
                            <Typography>{event.location}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <QueryBuilderIcon sx={{ color: goldHighlight }} />
                            <Typography>{event.time}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <PhoneIphoneIcon sx={{ color: goldHighlight }} />
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
