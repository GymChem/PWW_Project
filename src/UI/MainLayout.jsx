import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import BottomHalfPage from "./BottomHalfPage";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Routing from "./Routes";
import { BrowserRouter } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainLayout = () => {
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("900"));
  return (
    <BrowserRouter>
      <CustomAppBar desktopView={desktopView} />
      <Routing desktopView={desktopView} />
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
