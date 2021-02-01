import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

// components
import VWNavbar from "./components/vwnavbar/vwnavbar.component";
import VWCarousel from "./components/vwcarousel/vwcarousel.component";
import VWTitleMsg from "./components/vwtitlemsg/vwtitlemsg.component";
import About from "./sections/about/about.component";
import Skills from "./sections/skills/skills.component";
import Experience from "./sections/experience/experience.component";
import Projects from "./components/vwprojects/vwprojects.component";
import ContactForm from "./components/vwcontacts/vwcontacts.component";
import FooterPanel from "./components/vwfooter/vwfooter.component";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <VWCarousel />
      <VWTitleMsg />
      <VWNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
};
export default App;
