import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Card } from 'semantic-ui-react'
import BlogContent from './BlogContent'
import { Trail } from 'react-spring'

const blogs = [
  {
    id: "001",
    title: "Hello Machine Learning",
    author: "phtn458",
    description: "Intro to Machine Learning using Tensorflow.",
    createdAt: "createdAt",
    publishedAt: "publishedAt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    notes: "notes",
  },
  {
    id: "002",
    title: "Hello Keras",
    author: "phtn458",
    description: "Intro to Keras.",
    createdAt: "createdAt",
    publishedAt: "publishedAt",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    notes: "notes",
  },
];

const styles = {
  container: {
    marginTop: 30
  },
 
  card: {
    marginBottom: 20,
    padding: 20,
    paddingBottom: 0,

  },
  cardHeader: {
    fontFamily: 'Rajdhani, sans-serif',
  }
};

const Blogs = props => (
  <div style={Object.assign({}, styles.container, { paddingLeft: props.pad, paddingRight: props.pad })}>

    <Card.Group itemsPerRow={1}>
      <Trail items={blogs} keys={item => item.id} from={{opacity: 0, transform: "translate3d(0,5px,0)" }} to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}>
        { item => prop => {
          return (
            <Card key={item.id} style={Object.assign({}, styles.card, prop)} raised>
              {/* <Image src={item.image} alt={item.title} /> */}
              <Card.Content>
                <Card.Header style={styles.cardHeader}>
                  <NavLink
                    to={`/Blog/${item.title}`}
                    onClick={() => window.localStorage.setItem('current', blogs.indexOf(item))}
                  >
                    {item.title}
                  </NavLink>
                </Card.Header>
                <Card.Meta>{item.description}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <strong>{item.author}</strong> &nbsp; <span style={{color: '#ccc'}}>&middot;</span> &nbsp;{item.createdAt} 
              </Card.Content>
            </Card>
          )
        }}
      </Trail>
        
    </Card.Group>

  </div>
);



const BlogRoutes = () => {

  const [ width, setWidth ] = useState(window.innerWidth)
  const [ mobilePad, setMobilePad ] = useState(100)

  useEffect(()=> {
    const handleWidth = () => setWidth(window.innerWidth)
    const handlePad = (pad) => setMobilePad(pad)
    window.addEventListener('resize', handleWidth)
    if ( width < 767){
      handlePad(25)
    } else {
      handlePad(300)
    }
    return ()=> window.removeEventListener('resize', handleWidth)
  }, [width, mobilePad])

  const getBlogIndex = (index) => parseInt(index)
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/Blog" render={()=> <Blogs pad={mobilePad}/>} />
          <Route exact path="/Blog/:id" render={() => <BlogContent blogs={blogs} pad={mobilePad} idx={ getBlogIndex(window.localStorage.getItem('current'))}/>} />

          <Route component={()=> <Blogs/>}/>
        </Switch>
      </>
    </Router>
  );
};
export default BlogRoutes;
