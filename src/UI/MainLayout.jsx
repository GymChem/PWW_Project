import { NavTabs } from "./NavTabs";
import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import PopularLinks from "../components/PopularLinks";
import RecentUpdates from "../components/RecentUpdates";

const MainLayout = () => {
  const linkColor = "#0074C1";
  const headerColor = "#1B3A61";
  const goldHighlight = "#8C6910";
  const buttonFill = "#0074C1";
  const buttonText = "#F7F4ED";
  return (
    <>
      <CustomAppBar />
      <SearchBox buttonFill={buttonFill} buttonText={buttonText} />
      <PrioritiesBar headerColor={headerColor} />
      <PopularLinks linkColor={linkColor} headerColor={headerColor} />
      <RecentUpdates
        headerColor={headerColor}
        goldHighlight={goldHighlight}
        linkColor={linkColor}
        buttonFill={buttonFill}
        buttonText={buttonText}
      />
    </>
  );
};

export default MainLayout;
