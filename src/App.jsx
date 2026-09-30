import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PropertySearch from "./components/PropertySearch";
import FeaturedProperties from "./components/FeaturedProperties";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favorites";
import Agents from "./pages/Agents";
import Contact from "./pages/Contact";
import About from "./pages/About";

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
