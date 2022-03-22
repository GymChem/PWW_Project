import { NavTabs } from "./NavTabs";
import { Grid } from "@mui/material";
import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import PopularLinks from "../components/PopularLinks";
import RecentUpdates from "../components/RecentUpdates";
import EventsCalendar from "../components/EventsCalendar";
import { useRef } from "react";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  const linkColor = "#0074C1";
  const headerColor = "#1B3A61";
  const goldHighlight = "#8C6910";
  const buttonFill = "#0074C1";
  const buttonText = "#F7F4ED";

  const scrollEndRef = useRef(null);
  const scrollToBottom = () => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CustomAppBar />
      <SearchBox buttonFill={buttonFill} buttonText={buttonText} />
      <PrioritiesBar headerColor={headerColor} />
      <PopularLinks linkColor={linkColor} headerColor={headerColor} />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        paddingTop={4}
      >
        <Grid item>
          <RecentUpdates
            headerColor={headerColor}
            goldHighlight={goldHighlight}
            linkColor={linkColor}
            buttonFill={buttonFill}
            buttonText={buttonText}
          />
        </Grid>
        <Grid item>
          <EventsCalendar
            headerColor={headerColor}
            buttonFill={buttonFill}
            buttonText={buttonText}
            goldHighlight={goldHighlight}
          />
        </Grid>
        <div ref={scrollEndRef} />
        <ScrollToTop showBelow={250} buttonFill={buttonFill} />
      </Grid>
    </>
  );
};

export default MainLayout;
