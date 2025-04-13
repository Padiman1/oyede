import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChairmanMessage from "./components/ChairmanMessage/ChairmanMessage";
import Index from "./components/Index";

import Footer from "./components/footer/Footer";
import ScrollToTop from "../ScrollToTop";
import SupportHero from "./components/SupportHero/SupportHero";
import ContactUs from "./components/ContactUs/ContactUs";
import DonationPage from "./components/DonationPage/DonationPage";
import Navbar from "./components/NewNav/NewNav";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> {/* If you have a navbar */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<ChairmanMessage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<DonationPage />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <SupportHero />
      <Footer />
    </Router>
  );
}

export default App;
