import React from 'react'
// import { Card, Image } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'

import Landing from './Landing'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 700,
    width: '100%',
    height: 600,
    backgroundColor: '#333'
    // left: window.innerWidth / 4
  },
  

}
const Homepage = () => {

  return(
    <>

    <Landing/>

    <Fade bottom>
      <div style={styles.container}>
        
      </div>
    </Fade>
    </>
  )
}
export default Homepage