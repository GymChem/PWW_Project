import { HashRouter } from "react-router-dom";
import MainLayout from "./UI/MainLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HashRouter> */}
      <MainLayout />
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
