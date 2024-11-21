import "./App.css";
import HeroSection2 from "./components/HeroSection2";
import HeroSection3 from "./components/HeroSection3";
import HeroSection1 from "./components/HerSection1";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
    </div>
  );
}

export default App;
