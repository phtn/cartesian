import React from 'react'
import { Header, Grid, Image, Divider } from 'semantic-ui-react'
import Lightning from '../assets/lightning.svg'
import ReactLogo from '../assets/react.svg'

const styles = {
  container: {
    marginTop: 75,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center'
  },
  big: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 84,
    letterSpacing: 5,
    color: '#444',
    lineHeight: '50px'
  },
  subheader: {
    margin: 30
  },
  column: {
    margin: 20 
  }
}

const Head = props => (
  <div style={styles.subheader}>
    <Header as='h2'>
      <Image src={props.image}/>
      <Header.Content>
        {props.content} 
        <Header.Subheader> Using Cutting Edge Technology.</Header.Subheader>
      </Header.Content>
    </Header>
  </div>
)

const Landing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.big}>We build</h1>
      <br/>  
        <Head image={Lightning} content='Lightning Fast Web Applications'/>
      <Divider/>
      <Grid columns='equal'>
        <Grid.Row textAlign='center' columns={3}>
          <Grid.Column >
            React JS
            {/* <Image src={ReactLogo} size='medium' /> */}
          </Grid.Column>
          <Grid.Column >
            Firebase
            {/* <Image src={ReactLogo} size='medium' /> */}
          </Grid.Column>
          <Grid.Column >
            Heroku
            {/* <Image src={ReactLogo} size='medium' /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default Landing