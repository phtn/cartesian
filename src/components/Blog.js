import React from 'react'
import { Route, NavLink } from 'react-router-dom'

const Blog1 = ({ match }) => (
  <div>{match.params.id}</div>
)

const Blog = () => {
  return (
    <div>
      <Route path='/Blog/:id' component={Blog1}/>
    </div>
  )
}
export default Blog