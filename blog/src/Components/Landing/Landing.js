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
            <h1>Standard Blog</h1>
            <p>
              Registered users can create and comment on all videos in the blogfeed.
            </p>
            <div className="landing-btns-box">
              <Link className="btn" to="/blogFeed">
                Go To Blog Posts
            </Link>
            <Link className="btn" to="/login">
                Login as a Guest
            </Link>
              <Link className="btn" to="/register">
                Click Here To Register
            </Link>
            </div>

          </div>
          <div className="section-grid-item" />
        </section>
      </div>
    );
  }
}

export default Landing;
