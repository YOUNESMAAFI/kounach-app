import React from "react";
import Particles from "react-particles-js";
import "./Hero.css";

import Typography from "@material-ui/core/Typography";

const Hero = () => {
  return (
    <div className="hero-conaitner">
      <div className="hero">
        <Particles
          height="100vh"
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <div className="header">
        <Typography variant="h1" component="h2" gutterBottom>
          KOUNACH
        </Typography>
        <Typography variant="h3" gutterBottom>
          La première application intelligente pour la gestion de votre business
          en Algérie.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
