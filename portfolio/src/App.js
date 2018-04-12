import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router'

/*child components*/
import MediaPage from  './elements/MediaPage.js';
import AboutMe from './elements/AboutMe.js';
import PhotographyPage from './elements/PhotographyPage.js';
import mich from './static/mich.jpg'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return (
          <div container id = "container">
            <h1>Taylor Bentley</h1>
            <main>
              <div id="slider">
                <img className="mich" src={mich} alt="Taylor Bentley's Headshot"/>
                <article> Welcome to all things Taylor! Take a minute to explore my page, and discover what makes me a unique fit for your company.</article>
              </div>
              <Router>
                <Route>
                  <Route path="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/AboutMe.js" component={AboutMe} />
                  <Route path="page2" component={MediaPage} />
                  <Route path="page2" component={PhotographyPage} />
                </Route>
              </Router>
            /*<section className = "navbar">
                <div className = "dropdown">Explore
                  <div className ="dropdown-content">
                    <a href="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/AboutMe.js" target= "_blank" src={AboutMe}>About Me</a> <br/>
                    <a href="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/MediaPage.js"target= "_blank" src={MediaPage}>Media Page</a> <br/>
                    <a href="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/PhotographyPage.js" target= "_blank" src={PhotographyPage}>Photography Page</a>
                  </div>
                </div>
              </section>*/
            </main>
          </div>
    );
  }
}

export default App;
