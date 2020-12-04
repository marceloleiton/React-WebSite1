import React from 'react';
import { Navbar ,Footer} from './components';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home'
import servicios from './pages/servicios/servicios'
function App() {
  return (
    <Router>
      <GlobalStyles/> 
     <Navbar/> 
     <Switch>
       <Route path="/" exact component={Home}/>
        <Route path="/servicios" exact component={servicios} />
     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
