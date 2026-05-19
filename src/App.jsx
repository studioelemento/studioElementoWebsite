import "./index.css";
import Home from "./pages/home/Home";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import GlobalFloatingCTA from "./components/GlobalFloatingCTA";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <GlobalFloatingCTA />
      <Home />
    </>
  );
}

export default App;
