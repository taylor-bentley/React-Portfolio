import React, {Component} from 'react';
import '../App.css';
import mich from '../static/mich.jpg'

class AboutMe extends Component {


render() {
  return(
    <div id="aboutContainer">
      <header>
        <h1>Taylor Bentley</h1>
      </header>
      <main>
        <div id="slider">
          <img className="mich" src={mich} alt="Taylor Bentley's Headshot"/>
          <article> Hello there! I am Taylor Bentley. I began coding in 2017, while studying at Austin Coding Academy. The journey has expanded my mind, and continues to keep me on my toes! My background in Psychology helped me think outside the box, and how to work with differing perspectives. Learning is exciting to me! I enjoy being challenged, as is evident in one of my favorite hobbies--Brazilian Jiu Jitsu. In my spare time, I enjoy traveling, hiking, and camping. Fun facts: I am a classically trained singer and a yoga teacher. </article>
        </div>
        <section className="navbar">
          <div className="dropdown">Click
            <a href="https://www.linkedin.com/in/taylor-bentley-238021151/">LinkedIN</a>
            <a href="devwork.html">Development Work</a>
            <a href="Checkpoint2.html">Back to Home</a>
            </div>
        </section>
      </main>
    </div>
    );
  }
}
export default AboutMe;
