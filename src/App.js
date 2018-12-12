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

const Apps = Loadable({
  loader: () => import("./components/Apps"),
  loading: () => <Loading />
});

const Blog = Loadable({
  loader: () => import("./components/Blog"),
  loading: () => <Loading />
});

const Company = Loadable({
  loader: () => import("./components/ContentOne"),
  loading: () => <Loading />
});

export default App => {
  const [brand] = useState('Cartesian')
  const [pads, setPads] = useState(100)

  useEffect(()=> {
    document.title = brand
  }, [brand])

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=> {
    const handleWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidth)

    const handlePads = (pad) => setPads(pad)
    if ( width < 767){
      handlePads(25)
    } else {
      handlePads(300)
    }

    return ()=> window.removeEventListener('resize', handleWidth)
  }, [width])

  return (
    <Router>
      <>
        <Navbar brand={brand}/>
        <Switch>
          
          <Route exact path="/" render={() => <Homepage width={width}/>} />
          <Route path="/Apps" component={()=> <Apps  pads={pads} />} />
          <Route path="/Blog" component={()=> <Blog  />} />
          <Route path="/OurCompany" render={() => <Company title='Our Company'/>} />


          {/* REDIRECT */}
          <Route component={() => <Homepage/>}/>

        </Switch>
      </>
    </Router>
  );
};
