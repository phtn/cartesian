import React, { useState, useEffect } from "react";
import { Grid, Responsive, Card } from "semantic-ui-react";
import Particles from "react-particles-js";
import Laptop from "../assets/macbook.svg";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#333",
    height: "100%",
    // border: "3px solid papayawhip"
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
    width: '100%',
    // border: "2px solid tomato",
    maxHeight: 'inherit ',
    zIndex: 2
  },
  card: {
    width: "100%",
    height: "100%",
    // border: "2px solid blue",
  },
  
  image: {
    height: 300,
  }
};

const Landing = props => {
  return (
    <div style={styles.container}>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
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
              speed: 0.01
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
                distance: 200
              }
            }
          },
          retina_detect: true
        }}
      >
      <div style={styles.content}>
        <Responsive minWidth={767}>
          <div style={styles.card} className="animated fadeInRight">
            <img src={Laptop} style={styles.image} alt="" />
          </div>
        </Responsive>
      </div>
      </Particles>
    </div>
  );
};

export default Landing;
