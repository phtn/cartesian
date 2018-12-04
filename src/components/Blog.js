import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Switch from "react-router-dom/Switch";

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
    notes: "notes"
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
    notes: "notes"
  },
];

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    width: "100%"
  }
};

const Blogs = () => (
  <ul>
    {blogs.map(item => (
      <li key={item.id}>
        <NavLink
          to={`/Blog/${item.title}`}
          onClick={() => window.localStorage.setItem('current', blogs.indexOf(item))}
        >
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

const BlogContent = props => {
  const {idx} = props;
  const { id, title } = blogs[idx]
  return (
    <div style={styles.container}>
      <NavLink to="/Blog">back</NavLink>
      <h1>{ id } | { title } </h1>
    </div>
  );
};

const BlogRoutes = () => {
  // console.log(typeof(window.localStorage.getItem('current')))
  const getBlogIndex = (index) => parseInt(index)
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/Blog" component={Blogs} />
          <Route exact path="/Blog/:id" render={() => <BlogContent idx={ getBlogIndex(window.localStorage.getItem('current'))}/>} />
        </Switch>
      </>
    </Router>
  );
};
export default BlogRoutes;
