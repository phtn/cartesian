import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import Lightning from '../assets/lightning.svg'
import Workit from '../assets/workit.mp4'
import Fade from 'react-reveal/Fade'

const styles = {
  container: {
    textAlign: 'center',
  },
  big: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 56,
    letterSpacing: 5,
    color: '#eee',
    lineHeight: '50px',
  },
  medium: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 300,
    fontSize: 30,
    letterSpacing: 2,
    color: 'rgb(128, 224, 208)',
    lineHeight: '60px',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 30,
    marginBottom: 30,
    width: '100%'
  },
  small: {
    fontFamily: 'Rajdhani, sans-serif',
    // fontWeight: 300,
    fontSize: 30,
    letterSpacing: 1,
    color: '#eee',
    lineHeight: '34px',
    display: 'inline-block',
    marginBottom: 10,
  },
  image: {
    display: 'inline-block',
    height: 28,
    marginRight: 10
  },
  divider: {
    maxWidth: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid red'
  },
  video: {
    // height: '100%',
    // marginTop: '-50px'
  },
  content: {
    position: 'absolute',
    top: 150,
    width: '100%',
  }
}



const Vid = () => {
  return (
    <div>
      <video style={styles.video} src={Workit} autoPlay muted loop ></video>
    </div>
  )
}

const arr = ['Lightning Fast','Robust Code','Secured Database']

function looper(array){
  array.forEach((value)=> setTimeout(t=> {console.log(array.indexOf(value))}, 1000))
}

const Landing = () => {
  looper(arr)

  return (
    <div style={styles.container}>

      <Vid/>

    
    <Fade bottom cascade>
      <div style={styles.content}>
      <Grid columns='equal'>
        <Grid.Row textAlign='center' columns={3}>
          <Grid.Column >
            <h1 style={styles.big}>We Build</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns='equal'>
        <Grid.Row textAlign='center' columns={3}>
          <Grid.Column >
            <img src={Lightning} height={34} alt='fast' style={styles.image} className='animated slideInDown'/>
            <h1 style={styles.small} className='animated slideInUp'>Lightning Fast</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns='equal'>
        <Grid.Row textAlign='center' columns={3}>
          <Grid.Column >
            <h1 style={styles.medium}>Business Applications</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      </div>
    </Fade>

    
    
      
     
    </div>
  )
}
export default Landing