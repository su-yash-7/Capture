import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUS from './pages/ContactUs';
import OurWork from './pages/OurWork';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/work">
          <OurWork/>
        </Route>
        <Route path="/contact">
          <ContactUS/>
        </Route>
      </Switch>
      
      <GlobalStyle/>
    </div>
  );
}

export default App;
