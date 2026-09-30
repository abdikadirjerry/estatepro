import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PropertySearch from "./components/PropertySearch";
import FeaturedProperties from "./components/FeaturedProperties";
import Properties from "./pages/Properties";

function HomePage() {
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

function ComingSoon() {
  return (
    <>
      <Header />
      <main className="coming-soon">
        <h1>Coming Soon</h1>
        <p>This page will be available in an upcoming feature.</p>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
