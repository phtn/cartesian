import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Loading from '../assets/loading.svg'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '75px 20px',
  },

}
export default props => {

  return(
    <div style={styles.container}>
      {/* <Card fluid style={styles.card}> */}
        <Image src={Loading} className='loading'/>
      {/* </Card> */}
    </div>
  )
}