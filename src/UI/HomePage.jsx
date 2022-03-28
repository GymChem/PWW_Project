import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import BottomHalfPage from "./BottomHalfPage";

const HomePage = (props) => {
  return (
    <>
      <SearchBox desktopView={props.desktopView} />
      <PrioritiesBar mobileView={props.mobileView} />
      <BottomHalfPage
        desktopView={props.desktopView}
        halfDesktopView={props.halfDesktopView}
        mobileView={props.mobileView}
      />
    </>
  );
};

export default HomePage;
