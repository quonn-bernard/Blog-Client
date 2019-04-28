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
            <h3>Subcribe Below, To Get Post Alerts</h3>
            <p>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the chassis of a gutted game
              console. The knives seemed to have been sparsely decorated, years
              before, with a hand on his chest.{" "}
            </p>
            <Link className="btn" Link to="/blogFeed">
              Go To Blog Posts
            </Link>

            <Link className="btn" Link to="/register">
              Register
            </Link>
          </div>

          <div className="section-grid-item" />
        </section>
        <section className="section section-grid grey-bg ">
          <div />
          <div className="section-grid-item">
            <form id="contact-form">
              <input type="text" placeholder="Enter your handle" />
              <input type="text" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your password" />
              <input class="btn" type="submit" value="SUBMIT" />
            </form>
          </div>
          <div />
        </section>
      </div>
    );
  }
}

export default Landing;
