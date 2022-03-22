import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import BottomHalfPage from "./BottomHalfPage";

const MainLayout = () => {
  return (
    <>
      <CustomAppBar />
      <SearchBox />
      <PrioritiesBar />
      <BottomHalfPage />
    </>
  );
};

export default MainLayout;
