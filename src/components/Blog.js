import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Switch from 'react-router-dom/Switch';

const Blog1 = ({ match }) => (
  <h1>{match.params.id}</h1>
)

const links = ['tesla', 'ff']

const Blog = () => {
  return (
    <Router>
      <>
      {links.map(item => (
        <div key={item}>
        <NavLink to={`/Blog/${item}`} > {item} </NavLink> 
        <br/>
        </div>
      ))}
      <Route exact path='/Blog/:id' component={Blog1}/>
      </>
    </Router>
  )
}
export default Blog