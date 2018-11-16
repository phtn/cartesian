import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import Resp from '../assets/responsive.png'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 20px',
  },
  hero: {
    width: 600
  },
  card: {
    border: '1px solid #eee !important'
  }
}
export default props => {

  return(
    <Fade bottom>
      <div style={styles.container}>
        <Card fluid style={styles.card} >
          <Image src={Resp} />
          <Card.Content>
            <Card.Header>Dynamic Responsive Design</Card.Header>
          </Card.Content>
        </Card>
      </div>
    </Fade>
  )
}