import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'

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

handleOnClick = () => {
  this.setState({redirect: true});
}

  render() {
    /*if (this.state.redirect) {
      return <Redirect push to="">
    };*/
    return (
        <div container id = "container">
            <h1>Taylor Bentley</h1>
            <main>
              <div id="slider">
                <img className="mich" src={mich} alt="Taylor Bentley's Headshot"/>
                <article> Welcome to all things Taylor! Take a minute to explore my page, and discover what makes me a unique fit for your company.</article>
              </div>
              <nav className = "navbar">
                <div className = "dropdown">Explore
                  <ul className ="dropdown-content">
                    <li><Link to="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/AboutMe.js" target= "_blank" src={AboutMe}>About Me</Link></li> <br/>
                    <li><Link to="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/MediaPage.js"target= "_blank" src={MediaPage}>Media Page</Link></li> <br/>
                    <li><Link to="file:///Users/taylorbentley/Documents/jsdev/React-Portfolio/portfolio/src/elements/PhotographyPage.js" target= "_blank" src={PhotographyPage}>Photography Page</Link></li>
                  </ul>
                </div>
              </nav>
            </main>
          </div>
    );
  }
}

export default App;
