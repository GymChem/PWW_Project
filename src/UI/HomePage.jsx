import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import BottomHalfPage from "./BottomHalfPage";

const HomePage = () => {
  return (
    <>
      <SearchBox />
      <PrioritiesBar />
      <BottomHalfPage />
    </>
  );
};

export default HomePage;
