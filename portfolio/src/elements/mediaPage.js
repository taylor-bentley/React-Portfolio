import React, {Component} from 'react';


class MediaPage extends Component {


render() {
  return(
    <div className="bigOldDiv">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div id="header">
            <h1>Taylor Bentley</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <section className="navbar porty">
              <div className="dropdown">Portfolio
                <div className="dropdown-content">
                  <a href="../../05week/transitions-and-transformations/index.html">Transitions and Transformations</a>
                  <a href="../../02week/bio/index.html">My First Webpage</a>
                  <a href="../../03week/Checkpoint1/portfolio.html">Photography Portfolio</a>
                  <a href="../../04week/nasa/index.html">Nasa Webpage</a>
                  <a href="../../10week/checkpoint3/index.html">Fish Clicker Game></a>
                </div>
              </div>
            </section>
          </div>
        </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <section className="navbar">
                <div className="dropdown">Click
                  <div className="dropdown-content">
                    <a href="aboutme.html">About Me</a>
                    <a href="https://www.linkedin.com/in/taylor-bentley-238021151/">LinkedIN</a>
                    <a href="Checkpoint2.html">Back to Home</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </div>
  );
}
}
export default MediaPage;
