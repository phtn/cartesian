import React, { useState, useEffect } from 'react'
import { Responsive } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import Animate from 'react-move/Animate'

const styles = {
  container: {
    height: 100,
    paddingLeft: 20,
  },
  title: {
    fontFamily: 'Cinzel, serif',
    fontSize: 28,
    fontWeight: 400,
    // letterSpacing: 2,
    color: 'rgb(64, 180, 208)',
    lineHeight: '100px',
  },
  sub: {
    position: 'absolute',
    top: 45,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    color: 'rgb(64, 200, 208)'
  }
}
export default props => {
  const [left, setLeft] = useState(window.innerWidth)
  const [space, setSpace] = useState(-60)

  useEffect(()=> {
    window.addEventListener('resize', ()=> setLeft(window.innerWidth))
    setTimeout(t=> {
      setSpace(2)
    }, 300)
    return () => {
      window.removeEventListener('resize', ()=> setLeft(window.innerWidth))
    }
  })

  return (
    <div style={styles.container}>
      <Animate start={{s: space}} update={{s: [space]}}>
        {({s}) => {
          return (
            <h1 style={Object.assign({}, styles.title, {letterSpacing: s})} className='animated fadeIn'>
              Keystone Media
            </h1>
          )
          }
        }
      </Animate>
      <Responsive minWidth={500}>
        <h3 className='animated fadeIn' style={Object.assign({}, styles.sub, {left: left - 300})}>
          Websites &middot; Apps &middot; E-commerce
        </h3>
      </Responsive>
    </div>
  )
}