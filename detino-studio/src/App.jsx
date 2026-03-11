import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EyewearPage from "./pages/EyewearPage";
import JewelryPage from "./pages/JewelryPage";
import ProductPage from "./pages/ProductPage";
import LookbookPage from "./pages/LookbookPage";
import FindYourFramePage from "./pages/FindYourFramePage";
import AboutPage from "./pages/AboutPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eyewear" element={<EyewearPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/find-your-frame" element={<FindYourFramePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
