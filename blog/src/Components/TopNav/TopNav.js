import React from "react";
import { Link } from "react-router-dom";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import TokenService from '../../services/token-service';
import FeedContext from "../../contexts/FeedContext";
import "./TopNav.css";

class TopNav extends React.Component {

  static contextType = FeedContext

  // TopNav constructor
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // End of TopNav constructo

  // logout
  handleLogoutClick = () => {
    alert("Logged Out Successfully!!!")
    TokenService.clearAuthToken();
    localStorage.clear();
  }

  // renders logout and create post links to <TopNav/> if user is logged in
  renderLogoutLink() {
    return (
      <div className='Header__logged-in top-menu-link'>
        <Link
          to='/blogFeed'>
          Bookmarks
        </Link>

        {/* <Link
          to='/login'>
          {localStorage.getItem('user')}
        </Link> */}

        <Link
          className="login-logout"
          onClick={this.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
      </div>
    )
  }

  // renders if user is  logged out
  renderLoginLink() {
    return (
      <div className='Header__not-logged-in top-menu-link'>
        <Link
          to='/blogFeed'>
          Bookmarks
        </Link> 
        
        <Link
          to='/register'>
          Register
        </Link>

        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  // attaches Blog link to ('/') if user is logged out
  renderLandingLink() {
    return (
      <div className='Header__not-logged-in logo'>
        <Link
          to='/'>
          Video Finder
        </Link>
      </div>
    )
  }

  // attaches Blog link to ('/blogFeed') if user is logged in
  renderBlogFeedLink() {
    return (
      <div className='Header__logged-in logo'>
        <Link
          to='/blogFeed'>
          Video Finder
        </Link>
      </div>
    )
  }

  render() {

    // returns TopNav html(JSX)
    return (
      <nav>

        {/* nav-grid */}
        <div className="nav-grid">

          {/* nav-grid item */}
          <div className="nav-grid-item">

            <h1 className="logo">

              {/* attaches Blog Link to ('/blogFeed') if logged in, or to ('/') if else   */}
              {TokenService.hasAuthToken()
                ? this.renderBlogFeedLink()
                : this.renderLandingLink()}

            </h1>

          </div>

          {/* nav-grid item */}
          <div className="nav-grid-item-2">

            {/* Hamburger menu button renders when screen < 678px */}
            <HamburgerBtn click={this.props.hamburgerClick} />

            {/* Post Categories drop down */}
            <ul className="top-ul">

              {/*renders login and register links to <TopNav/> if user is  logged out*/}
              <li>
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}
              </li>
            </ul>
            {/* End of Post Dropdown */}

          </div>
        </div>
        {/* End of nav-grid */}
      </nav>
    );
  }
}

export default TopNav;
