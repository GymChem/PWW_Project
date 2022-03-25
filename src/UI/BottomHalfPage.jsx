import { Grid } from "@mui/material";
import RecentUpdates from "../components/RecentUpdates";
import EventsCalendar from "../components/EventsCalendar";
import ScrollToTop from "./ScrollToTop";
import PopularLinks from "../components/PopularLinks";
import { useRef } from "react";
import { buttonFill } from "../data/Globals";

const BottomHalfPage = (props) => {
  const scrollEndRef = useRef(null);
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item width="80%" paddingBottom={2}>
          <PopularLinks />
        </Grid>
        <Grid item width="80%">
          <Grid
            container
            direction={!props.mobileView ? "row" : "column"}
            alignItems="flex-start"
            justifyContent="center"
            paddingTop={4}
          >
            <Grid
              item
              width={!props.mobileView ? "50%" : "90%"}
              paddingBottom={!props.mobileView ? 0 : 4}
            >
              <RecentUpdates />
            </Grid>
            <Grid item width={!props.mobileView ? "50%" : "90%"}>
              <EventsCalendar />
            </Grid>
            <div ref={scrollEndRef} />
            <ScrollToTop showBelow={250} buttonFill={buttonFill} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BottomHalfPage;
