import React from "react";
import { Responsive } from "semantic-ui-react";
import Particles from "react-particles-js";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#333",
    height: "100%"
  },
  content: {
    position: "absolute",
    top: 100,
    width: "100%",
    maxHeight: "inherit ",
    zIndex: 2
  },

  hero: {
    position: "absolute",
    top: 210,
    left: "0%",
    right: "0%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 300,
    fontSize: 40,
    color: "#eee",
    textTransform: "uppercase",
    letterSpacing: 3
  },
  subHero: {
    position: "absolute",
    top: 260,
    left: "0%",
    right: "0%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    color: "#ffd454",
    textTransform: "uppercase",
    letterSpacing: 2
  },
  hr: {
    width: 420,
    border: "none",
    height: "1px",
    backgroundColor: "#066b98",
    position: "absolute",
    top: 320,
    left: "0%",
    right: "0%",
    margin: "0 auto",
  },
  mobileHero: {
    position: "absolute",
    top: 110,
    left: "0%",
    right: "0%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 300,
    fontSize: 40,
    color: "#eee",
    textTransform: "uppercase",
    letterSpacing: 3
  },
  subMobileHero: {
    position: "absolute",
    top: 160,
    left: "0%",
    right: "0%",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    color: "#ffd454",
    textTransform: "uppercase",
    letterSpacing: 2
  }
};

const Landing = props => {
  // const items = ['1','2','3','4','5']

  return (
    <div style={styles.container}>
      <Responsive minWidth={767}>
        <h1 style={styles.hero} className="animated fadeInDown">
          We Build
        </h1>
        
      <h1 style={styles.subHero} className="animated fadeInDown">
          Business Applications
        </h1>
        <hr
          style={styles.hr}
          className="animated slideInLeft"
        />
      </Responsive>

      <Responsive maxWidth={766}>
        <h1 style={styles.mobileHero} className="animated fadeInDown">
          Cartesian
        </h1>
        <h3 style={styles.subMobileHero} className="animated fadeInUp ">
          building business applications
        </h3>
      </Responsive>

      <Particles
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            color: {
              value: "#066b98"
            },
            line_linked: {
              enable: false,
              distance: 200,
              opacity: 0.1
            },
            move: {
              direction: "right",
              speed: 0.09
            },
            size: {
              value: 1
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                size: 7,
                distance: 100
              }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
};

export default Landing;
