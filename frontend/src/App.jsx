import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Logistics from "./pages/Logistics";
import ScrollToTop from "./utils/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/logistics" element={<Logistics />} />
      </Routes>
      <Footer />
    </Router>
    </LanguageProvider>
  );
}

export default App;
