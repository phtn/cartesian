import React from "react";
import Fade from "react-reveal/Fade";
import { Grid, Image, Responsive } from "semantic-ui-react";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 75
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: 28,
    color: "#066b98"
  },
  hr: {
    maxWidth: 100,
    borderBottom: "none",
    height: '1px',
    borderTopColor: "#ffd454"
  },
  description: {
    fontFamily: "Roboto, sans-serif",
    fontSize: '1.3em',
    width: '100%',
    margin: '30px auto',
    padding: '0px 50px'
  }
};

const ContentOne = props => {
  return (
    <div style={styles.container}>
      <Fade bottom>
        <div>
          <Grid stackable divided>
            <Grid.Row columns={2} textAlign="center">
              <Grid.Column>
                <h2 style={styles.title}>{props.title}</h2>
                <hr style={styles.hr} />
                <p style={styles.description}> <strong>React</strong> is the most advanced UI library used by thousands of companies because of its simplicity and component focused approach on applications putting reusability at top priority therefore making apps lightning fast.</p>
              </Grid.Column>
              <Grid.Column>
                  <Image
                    src={props.image}
                    height={300}
                    style={{ margin: "0 auto" }}
                  />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Fade>
    </div>
  );
};

export default ContentOne;
