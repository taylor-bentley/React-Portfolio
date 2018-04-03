import React, { Component } from 'react';
import './App.css';
import './elements/mediaPage.js';
import './aboutMe.js';

class App extends Component {




  render() {
    return (
        <body>
          <title className= "Taylor Bentley's Web Portfolio"/>
          <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light+Two" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch" rel="stylesheet"/>

          <container id = "container"/>
            <h1>Taylor Bentley</h1>
            <main>
              <div id="slider">
                <img className = "mich" src="img/tayheadshot.jpg" alt="Taylor Bentley's Headshot"/>
                <article> Welcome to my page! My name is Taylor Bentley, and I am a junior web developer. Take a minute to explore my page, and discover what makes me a unique fit for your company.</article>
              </div>
              <section className = "navbar">
                <div className = "dropdown">Explore
                  <div className ="dropdown-content">
                    <a href="aboutMe.js">About Me</a>
                    <a href="mediaPage.js">Media Page</a>
                  </div>
                </div>
              </section>
            </main>
          </body>
    );
  }
}

export default App;
