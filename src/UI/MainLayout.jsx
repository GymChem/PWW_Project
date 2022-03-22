import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import Footer from "./Footer";
import BottomHalfPage from "./BottomHalfPage";

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
      <BottomHalfPage
        headerColor={headerColor}
        buttonFill={buttonFill}
        buttonText={buttonText}
        goldHighlight={goldHighlight}
        linkColor={linkColor}
      />
    </>
  );
};

export default MainLayout;
