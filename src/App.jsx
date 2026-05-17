import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import F1Results from "./pages/F1Results";
import F1Results2026 from "./pages/F1Results2026";
import PartnerSponsors from "./pages/PartnerSponsors";
import History from "./pages/History";
import ScrollToTop from "./components/ScrollToTop";
import InstallPrompt from "./components/InstallPrompt";

function App() {
  return (
    <>
    <InstallPrompt />
      <BrowserRouter>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/f1-2025" element={<F1Results />} />
          <Route path="/f1-2026" element={<F1Results2026 />} />
          <Route path="/partner-sponsor" element={<PartnerSponsors />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
