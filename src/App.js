import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable'
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";
import Loading from "./components/Loading";
import './App.css'
import './animate.css'

const Homepage = Loadable({
  loader: ()=> import('./components/Homepage'),
  loading: ()=> <Loading/>
})

export default App => {
  return (
    <Router>
      <>
        {/* <Brand/> */}
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Homepage/>}/>
          <Route path="/blog" render={() => <div>Blog Page</div>} />
          <Route path="/about" render={() => <div>About Page</div>} />
        </Switch>
      </>
    </Router>
  );
};
