import React from 'react'
// import { Card, Image } from 'semantic-ui-react'

import ReactLogo from '../assets/react2.svg'
import ReduxLogo from '../assets/redux.svg'
import FirebaseLogo from '../assets/firebase.svg'
import HerokuLogo from '../assets/heroku.svg'
import Landing from './Landing'
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo';
import ContentThree from './ContentThree';

const Homepage = () => {

  return(
    <>

    <Landing/>

    <ContentOne title='State Of The Art UI' image={ReactLogo}/>
    <ContentTwo title='Robust State Management' image={ReduxLogo}/>
    <ContentThree title='Realtime Database' image={FirebaseLogo}/>
    <ContentTwo title='Auto SSL Deployment' image={HerokuLogo}/>
    </>
  )
}
export default Homepage