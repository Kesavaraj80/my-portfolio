import "./App.css";
import { useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";
// Material Ui


// Components
import { HomeSection } from "./components/Home/HomeSection";
// import { About } from "./components/About/About";
import {Navbar } from "./components/Navbar/Navbar"




function App() {
  
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      {/* <About /> */}
    </div>
  );
}

export default App;



