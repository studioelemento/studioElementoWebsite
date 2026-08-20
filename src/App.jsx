import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DotFolio from "./pages/dotfolio/DotFolio";
import Careers from "./pages/careers/Careers";
import Snaps from "./pages/snaps/Snaps";
import Discuss from "./pages/discuss/Discuss";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import GlobalFloatingCTA from "./components/GlobalFloatingCTA";

function App() {
  return (
    <BrowserRouter>
      {/* Global Elements */}
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Other pages with global elements */}
        <Route path="/thedotfolio" element={<><ScrollProgress /><GlobalFloatingCTA /><DotFolio /></>} />
        <Route path="/careers" element={<><ScrollProgress /><GlobalFloatingCTA /><Careers /></>} />
        <Route path="/snaps" element={<><ScrollProgress /><GlobalFloatingCTA /><Snaps /></>} />
        <Route path="/discuss" element={<><ScrollProgress /><GlobalFloatingCTA /><Discuss /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
