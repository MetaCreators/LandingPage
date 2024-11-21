import "./App.css";
import HeroSection2 from "./components/HeroSection2";
import HeroSection3 from "./components/HeroSection3";
import HeroSection4 from "./components/HeroSection4";
import HeroSection5 from "./components/HeroSection5";
import HeroSection1 from "./components/HerSection1";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
    </div>
  );
}

export default App;
