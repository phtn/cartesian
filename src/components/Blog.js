import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: '100%',
  }
}

const Blogs = () => (
  <>
    {links.map(item => (
        <div key={item}>
        <NavLink to={`/Blog/${item}`} > {item} </NavLink> 
        <br/>
        </div>
      ))}
  </>
)

const BlogContent = ({ match }) => (
  <div style={styles.container}>
    <h1>{match.params.id}</h1>
  </div>
)

const links = ['tesla', 'ff']

const BlogRoutes = () => {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path='/Blog' component={Blogs} />
        <Route path='/Blog/:id' component={BlogContent}/>
      </Switch>
      </>
    </Router>
  )
}
export default BlogRoutes