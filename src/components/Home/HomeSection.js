import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import image from "../../assets/myImg2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Css
import "./HomeSection.css";

export function HomeSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section className="home_section">
      <div className="name_container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<strong><span style="font-size:2rem">Hello, I am <span style="color:#42f5c8">Kesavaraj M</span></span><br></strong> '
              )
              .pauseFor(500)
              .typeString("<span>I am a Full Stack Developer</span> <br>")
              .pauseFor(500)
              .typeString(
                "I specialize in developing and deploying responsive websites and web applications"
              )
              .start();
          }} />
        <Button variant="outlined" style={{ marginTop: "50px" }}>
          Know More
        </Button>
      </div>
      <div className="img_container shape-outer circle" data-aos="fade-left">
        <img src={image} className="my_image shape-inner circle" alt="Kesavaraj" />
      </div>
    </section>
  );
}
