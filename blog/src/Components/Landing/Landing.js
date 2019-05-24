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
            <h1>Video Finder App</h1>
            <p>

              The Video Finder App allows users to search videos at youtube.com. If the user finds a video that they found particularly, entertaining,
              useful, or just well done in general, they can bookmark it, rate it from 1-5 stars and leave somefeed back about the video and how it helped them. The bookmarks
              are then added to a  scrollable "feed", that will act as a landing page for authenticated users. Login and Registration are not required to use the system.
              The DEMO credentials are username: "demo1234" password: "Demo1234!"; Signing in will give users the ability to add bookmarks to the feed.
       </p>
            <div className="landing-btns-box">
              <Link className="btn" to="/blogFeed">
                Find Tutorials
            </Link>
              <Link className="btn" to="/login">
                Login as a Guest
            </Link>
              <Link className="btn" to="/register">
                Register
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
