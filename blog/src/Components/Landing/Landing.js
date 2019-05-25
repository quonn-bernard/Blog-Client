import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark ,faSearch } from '@fortawesome/free-solid-svg-icons'

class Landing extends React.Component {
  
  render() {
    const style = {
      color: "red",
      fontSize: "40px"
    }

    const bookmark = <FontAwesomeIcon icon={faBookmark} style={style}/>
    const searchGlass = <FontAwesomeIcon icon={faSearch} className="search"/>

    return (
      <div>
        <section id="banner" className="section section-grid">
          <div className="section-grid-item" />
          <div className="section-grid-item">
            <h1>V-MARKER</h1>
            {bookmark}
            <p className="landing-content-text">
              V-MARKER allows users to search videos via youtube api. If the user finds a video that they found useful
             or just well done in general, they can bookmark it, rate it and leave somefeed back about how the video was of use. 
              The DEMO credentials are username: "demo1234" password: "Demo1234!"; Signing in will give users the ability to add bookmarks to the "feed".
            </p>
            <div className="landing-btns-box">
              <Link className="btn" to="/blogFeed">
                {searchGlass} Find Tutorials
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
