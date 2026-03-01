import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import GamePreview from "../components/GamePreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="app-root">
      <div className="app-shell">
        <Navbar />
        <Hero />
        <Features />
        <GamePreview />
        <Footer />
      </div>
    </div>
  );
}