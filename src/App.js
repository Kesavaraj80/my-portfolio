import "./App.css";
import { useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Switch} from "react-router-dom";
// Material Ui


// Components
import { HomeSection } from "./components/Home/HomeSection";
import { About } from "./components/About/About";
import {Navbar } from "./components/Navbar/Navbar"





function App() {
  
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeSection />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/projects">project</Route>
        <Route path="/contact">contacts</Route>
      </Switch>
    </div>
  );
}

export default App;



