import CustomAppBar from "../components/AppBar";
import Footer from "./Footer";
import Routing from "./Routes";
import { BrowserRouter } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainLayout = () => {
  const desktopView = useMediaQuery((theme) => theme.breakpoints.up("900"));
  const halfDesktopView = useMediaQuery((theme) =>
    theme.breakpoints.between("650", "900")
  );
  const mobileView = useMediaQuery((theme) => theme.breakpoints.down("650"));
  return (
    <BrowserRouter>
      <CustomAppBar
        desktopView={desktopView}
        halfDesktopView={halfDesktopView}
        mobileView={mobileView}
      />
      <Routing
        desktopView={desktopView}
        halfDesktopView={halfDesktopView}
        mobileView={mobileView}
      />
      <Footer mobileView={mobileView} />
    </BrowserRouter>
  );
};

export default MainLayout;
