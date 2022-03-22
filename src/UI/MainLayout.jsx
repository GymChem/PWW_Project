import { NavTabs } from "./NavTabs";
import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import PopularLinks from "../components/PopularLinks";

const MainLayout = () => {
  return (
    <>
      <CustomAppBar />
      <SearchBox />
      <PrioritiesBar />
      <PopularLinks />
    </>
  );
};

export default MainLayout;
