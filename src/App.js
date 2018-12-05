import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import "./animate.css";

const Homepage = Loadable({
  loader: () => import("./components/Homepage"),
  loading: () => <Loading />
});

const Blog = Loadable({
  loader: () => import("./components/Blog"),
  loading: () => <Loading />
});

export default App => {
  const [brand] = useState('Cartesian')
  useEffect(()=> {
    document.title = brand
  }, [brand])
  return (
    <Router>
      <>
        <Navbar brand={brand}/>
        <Switch>
          
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/Blog" component={Blog} />
          <Route path="/OurCompany" render={() => <div>Company Page</div>} />

          {/* REDIRECT */}
          <Route component={() => <Homepage/>}/>

        </Switch>
      </>
    </Router>
  );
};
