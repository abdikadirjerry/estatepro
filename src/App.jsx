import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PropertySearch from "./components/PropertySearch";
import FeaturedProperties from "./components/FeaturedProperties";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PropertySearch />
        <FeaturedProperties />
      </main>
    </>
  );
}

function ComingSoon({ title }) {
  return (
    <>
      <Header />
      <main className="coming-soon">
        <h1>{title}</h1>
        <p>This page is coming soon. Check back for updates.</p>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/agents" element={<ComingSoon title="Our Agents" />} />
        <Route path="/about" element={<ComingSoon title="About EstatePro" />} />
        <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
