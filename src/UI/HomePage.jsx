import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import BottomHalfPage from "./BottomHalfPage";

const HomePage = (props) => {
  return (
    <>
      <SearchBox desktopView={props.desktopView} />
      <PrioritiesBar />
      <BottomHalfPage />
    </>
  );
};

export default HomePage;
