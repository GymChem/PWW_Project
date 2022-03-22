import { Grid, Typograpy, Box, Link } from "@mui/material";
import RecentUpdates from "../components/RecentUpdates";
import EventsCalendar from "../components/EventsCalendar";
import ScrollToTop from "./ScrollToTop";
import PopularLinks from "../components/PopularLinks";
import { useRef } from "react";
import Footer from "./Footer";

const BottomHalfPage = (props) => {
  const scrollEndRef = useRef(null);
  const scrollToBottom = () => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item width="80%" paddingBottom={2}>
          <PopularLinks
            headerColor={props.headerColor}
            goldHighlight={props.goldHighlight}
            linkColor={props.linkColor}
            buttonFill={props.buttonFill}
            buttonText={props.buttonText}
          />
        </Grid>
        <Grid item width="80%">
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            paddingTop={4}
          >
            <Grid item width="50%">
              <RecentUpdates
                headerColor={props.headerColor}
                goldHighlight={props.goldHighlight}
                linkColor={props.linkColor}
                buttonFill={props.buttonFill}
                buttonText={props.buttonText}
              />
            </Grid>
            <Grid item width="50%">
              <EventsCalendar
                headerColor={props.headerColor}
                buttonFill={props.buttonFill}
                buttonText={props.buttonText}
                goldHighlight={props.goldHighlight}
              />
            </Grid>
            <div ref={scrollEndRef} />
            <ScrollToTop showBelow={250} buttonFill={props.buttonFill} />
          </Grid>
          <Footer headerColor={props.headerColor} />
        </Grid>
      </Grid>
    </>
  );
};
export default BottomHalfPage;
