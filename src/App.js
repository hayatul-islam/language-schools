
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="/contacts">
            <Contact />
          </Route>

          <Route path="*">
            <Notfound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;
