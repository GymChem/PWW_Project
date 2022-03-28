import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import UpdatesEventsFormatting from "./UpdatesEventsFormatting";

const HomePage = (props) => {
  return (
    <>
      <SearchBox desktopView={props.desktopView} />
      <PrioritiesBar mobileView={props.mobileView} />
      <UpdatesEventsFormatting
        desktopView={props.desktopView}
        halfDesktopView={props.halfDesktopView}
        mobileView={props.mobileView}
      />
    </>
  );
};

export default HomePage;
