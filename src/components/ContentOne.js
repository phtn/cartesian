import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Grid, Image } from "semantic-ui-react";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 75,
    paddingBottom: 75,
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
  }
};

const ContentOne = props => {
  const { width } = props
  const [padding, setPadding] = useState(100)
  
  
  
  useEffect(()=> {
    const handlePadding = (pad) => setPadding(pad)  

    if (width < 767){
      handlePadding(15)
      // console.log('test')
    } else {
      handlePadding(100)
    }
    
  }, [width])

  

  return (
    <div style={styles.container}>
      <Fade bottom>
        <div>
          <Grid stackable divided>
            <Grid.Row columns={2} textAlign="center">
              <Grid.Column>
                <h2 style={styles.title}>{props.title}</h2>
                <hr style={styles.hr} />
                <p style={Object.assign({}, styles.description, {paddingRight: padding, paddingLeft: padding})}> <strong>React</strong> is the most advanced UI library used by thousands of companies because of its simplicity and component focused approach on applications putting reusability at top priority therefore making apps lightning fast.</p>
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
