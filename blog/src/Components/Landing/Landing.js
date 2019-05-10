import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <section id="banner" className="section section-grid">
          <div className="section-grid-item" />
          <div className="section-grid-item">
            <h1>Welcome To The Capstone Blog</h1>
            
            <p>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the chassis of a gutted game
              console. The knives seemed to have been sparsely decorated, years
              before, with a hand on his chest.{" "}
            </p>
            <Link className="btn" to="/blogFeed">
              Go To Blog Posts
            </Link>
          </div>

          <div className="section-grid-item" />
        </section>
        <section className="section section-grid grey-bg ">
        <div className="section-grid-item" />
        
        
          <div className="section-grid-item">
          <div>
          <h3>Subcribe Below, To Get New Post Alerts, Video Alerts, And More!!!</h3>
          <p>
            
          </p>
          </div>
          
            <Link className="btn" to="/register">
              Click Here To Register
            </Link>
          </div>
          <div className="section-grid-item" />
        </section>
      </div>
    );
  }
}

export default Landing;
