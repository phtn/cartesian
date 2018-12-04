import React from "react";
import { Responsive } from "semantic-ui-react";
import Particles from "react-particles-js";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#333",
    height: "100%"
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: 28,
    color: "#eee"
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1.3em",
    width: "100%",
    margin: "30px auto",
    padding: "0px 100px"
  },
  content: {
    position: "absolute",
    top: 100,
    width: "100%",
    maxHeight: "inherit ",
    zIndex: 2
  },
  card: {
    width: "100%",
    height: "100%"
  },
  image: {
    height: 300
  },
  hero: {
    position: "absolute",
    top: 300,
    color: "#066b98",
    fontSize: 42,
    lineHeight: "40px"
  },
  subhero: {
    textTransform: "uppercase",
    fontWeight: 300,
    fontSize: 28,
    fontFamily: "Rajdhani, sans-serif",
    marginLeft: 10,
    color: "#ccc",
    lineHeight: "60px"
  },
  hr: {
    width: 420,
    border: "none",
    height: "1px",
    backgroundColor: "#ffd454",
    position: "absolute",
    top: 350
  }
};

const Landing = props => {
  const { width } = props;
  return (
    <div style={styles.container}>
      <Responsive minWidth={767}>
        <h1
          style={Object.assign({}, styles.hero, { left: width / 8 })}
          className="animated fadeInDown"
        >
          We Build{" "}
          <span style={styles.subhero} className="animated fadeInRight">
            business applications
          </span>
        </h1>
        <hr
          style={Object.assign({}, styles.hr, { left: width / 6.7 })}
          className="animated slideInLeft"
        />
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
              enable: true,
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
