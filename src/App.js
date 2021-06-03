import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUS from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
        <Route path="/contact">
          <ContactUS/>
        </Route>
      </Switch>
      </AnimatePresence>
      <GlobalStyle/>
    </div>
  );
}

export default App;
