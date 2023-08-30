import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from './components/layouts/NavBar'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Social from './components/pages/Social'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
};

export default App;
