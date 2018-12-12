import React, { useState } from 'react'
import { Trail } from 'react-spring'
import Tilt from 'react-vanilla-tilt'
import { Button, Icon, Menu } from 'semantic-ui-react'
import PalettePicker from '../assets/pp.jpg'
import Wiki from '../assets/wiki.jpg'

const styles = {
  container: {
    marginTop: 30
  },
  card: {
    width: 'inherit',
    backgroundColor: '#333',
    marginBottom: 40,
    borderRadius: 3,
    paddingBottom: 5
  },
  innerCard: {
    backgroundColor: '#666',
    height: 250,
    padding: 20,
    color: '#eee', 
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.5em',
    width: 'inherit'
  },
  appMenu: {
    margin: 20,
    backgroundColor: '#333 !important'
  }
}



const Apps = props => {
  const [pickerLikes, setPickerLikes] = useState(154)
  const [wikiLikes, setWikiLikes] = useState(268)
  const addPickerLikes = () => {
    setPickerLikes(pickerLikes + 1)
  }
  const addWikiLikes = () => setWikiLikes(wikiLikes + 1)
  const apps = [{title: 'Palette Picker', image: PalettePicker, likes: pickerLikes, click: ()=> addPickerLikes(), href: 'http://reactjsapps.herokuapp.com/'}, {title: 'WikiLite', image: Wiki, likes: wikiLikes, click: ()=> addWikiLikes(), href: 'http://www.wikipedialite.org/'}]
  const { pads } = props
  return (
    <div style={Object.assign({}, styles.container, { paddingLeft: pads, paddingRight: pads })}>
      <Trail items={apps} keys={item => item.title} from={{opacity: 0, transform: "translate3d(0,5px,0)" }} to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}>
        {item => prop => (
          <Tilt style={Object.assign({}, styles.card, prop)} options={{glare: true, scale: 1.5}}>
            <div style={Object.assign({}, styles.innerCard, {background: `url(${item.image})`, backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'})}></div>
            
            <Menu style={styles.appMenu} secondary>
              <Menu.Menu position='left'>
                <Menu.Item>
                  <Button icon labelPosition='left' onClick={item.click}>
                    <Icon name='thumbs up' />
                    {item.likes}
                  </Button>
                </Menu.Item>
              </Menu.Menu>

              <Menu.Menu position='right'>
                <Menu.Item>
                <Button primary icon labelPosition='right' as='a' href={item.href}>
                  <Icon name='rocket' />
                  Launch
                </Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Tilt>
        )}
      </Trail>
      
    </div>
  )
}
export default Apps