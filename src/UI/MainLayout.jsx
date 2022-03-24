import CustomAppBar from "../components/AppBar";
import SearchBox from "../components/SearchBox";
import PrioritiesBar from "../components/PrioritiesBar";
import BottomHalfPage from "./BottomHalfPage";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Routing from "./Routes";
import { BrowserRouter } from "react-router-dom";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <CustomAppBar />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
