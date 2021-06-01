import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <AboutUs/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
