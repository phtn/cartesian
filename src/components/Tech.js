import React from 'react'
import Fade from 'react-reveal/Fade'
import Particles from 'react-particles-js'
import Phone from '../assets/poly.svg'
const styles = {
  container: {
    position: 'absolute',
    top: 700,
    width: '100%',
    height: 600,
    backgroundColor: '#333'
  },
  

}

const Tech = () => {
  return (
    <>
      <Fade bottom>
      <div style={styles.container}>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
          },
          "color": {
            "value": "#40B4D0"
          },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 2,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 100,
	                "duration": 4
	            }
	        }
	    }
	}} />
        </div>
      </Fade>
    </>
  )
}

export default Tech