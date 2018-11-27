import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import Lightning from '../assets/lightning.svg'
import Workit from '../assets/workit.mp4'
import Fade from 'react-reveal/Fade'

const styles = {
  container: {
    textAlign: 'center'
  },
  big: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 84,
    letterSpacing: 5,
    color: '#fff',
    lineHeight: '60px',
    zIndex: 1
  },
  medium: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 300,
    fontSize: 44,
    letterSpacing: 2,
    color: 'rgb(64, 180, 208)',
    lineHeight: '60px',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    marginBottom: 30,
    width: '100%'
  },
  small: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontWeight: 700,
    fontSize: 34,
    letterSpacing: 3,
    color: '#444',
    lineHeight: '34px',
    display: 'inline-block',
    marginBottom: 10,
  },
  image: {
    display: 'inline-block',
    marginRight: 10
  },
  divider: {
    maxWidth: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid red'
  }
}



const Vid = () => {
  return (
    <div style={{height: 75}}>
      <video src={Workit} autoPlay muted loop></video>
    </div>
  )
}

const arr = [1,2,3]

function looper(array){
  array.forEach((value)=> setTimeout(t=> {console.log(value)}, value * 3000))
}

const Landing = () => {
  looper(arr)

  return (
    <div style={styles.container}>

      <Vid/>

    
    <Fade bottom cascade>
      <div>
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