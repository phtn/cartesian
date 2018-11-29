import React from "react";
import Fade from "react-reveal/Fade";
// import { Grid, Image } from "semantic-ui-react";
// import FooterBG from '../assets/footerbg.jpg'
const styles = {
  container: {
    width: "100%",
    padding: 100
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: 30,
    color: "#066b98"
  },
  hr: {
    maxWidth: 100,
    borderBottom: 'none',
    borderTopColor: 'rgb(238,238,238)'
  }
};

const Footer = props => {
  return (
    <div style={styles.container}>
      <Fade bottom>
        <div>
          
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
