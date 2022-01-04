import "./App.css";
import { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
// Material Ui
import Button from "@mui/material/Button";

// Assets
import image from "./assets/myImg2.jpg";




function App() {
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);

  return (
    <div className="App">
      <nav className="navbar">
        {/* <div className="brand_title">My portfolio</div> */}
        <div className="navbar_Links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <HomeSection />
      <About />
    </div>
  );
}

export default App;


function HomeSection(){
  return (
    <section className="home_section">
      <div className="name_container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<strong><span style="font-size:2rem">Hello, I am <span style="color:#42f5c8">Kesavaraj M</span></span><br></strong> '
              )
              .pauseFor(1000)
              .typeString("<span>I am a MERN Stack Developer</span>")
              .start();
          }}
        />
        <Button variant="outlined" style={{ marginTop: "50px" }}>
          Know More
        </Button>
      </div>
      <div className="img_container shape-outer circle" data-aos="fade-left">
        <img src={image} className="my_image shape-inner circle" />
      </div>
    </section>
  );
}

function About(){
  return (
    <section className="about_section">
      <div className="about_container">
        
      </div>
    </section>
  );
}
