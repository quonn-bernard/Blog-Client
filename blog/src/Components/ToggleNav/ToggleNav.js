import React from 'react'
import { Link } from 'react-router-dom';
import NavContext from "../../contexts/NavContext";
import TokenService from '../../services/token-service';
import './ToggleNav.css'

// functional component
class ToggleNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static contextType = NavContext

  // renders logout and create post links to <TopNav/> if user is logged in
  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>

        <span style={{ color: `white`, marginBottom: `20px` }} className="mbl-menu-user">
          User: {localStorage.getItem('user')}
        </span>

        <Link
          className="mbl-menu-links"
          to='/create_post'>
          <p style={{ display: `block`, marginBottom: `10px`, color: "white" }}><span style={{ fontSize: `20px` }}>+</span>Post</p>
        </Link>

        <Link
          style={{ display: `block`, marginBottom: `10px`, color: "white" }}
          className="login-logout mbl-menu-links"
          onClick={this.context.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
      </div>
    )
  }

  // renders if user is  logged out
  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          style={{ display: `block`, marginBottom: `10px`, color: "white" }}
          className="mbl-menu-links"
          to='/register'>
          Register
        </Link>

        <Link
          style={{ color: "white" }}
          className="mbl-menu-links"
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  // attaches Blog link to ('/') if user is logged out
  renderLandingLink() {
    return (
      <div className='Header__not-logged-in mbl-logo mbl-menu-links'>
        <Link
          style={{ color: "white" }}
          to='/'>
          Blog
        </Link>
      </div>
    )
  }

  // attaches Blog link to ('/blogFeed') if user is logged in
  renderBlogFeedLink() {
    return (
      <div className='Header__logged-in mbl-logo'>
        <Link
          style={{ color: "white" }}
          to='/blogFeed'>
          Blog
        </Link>
      </div>
    )
  }

  render() {
    // returns ToggleNav html(JSX)
    return (
      // Nav menu and links
      <nav className="side-drawer">
        {/* nav-grid */}
        <div className="">
          {/* nav-grid item */}
          <div className="">
            <h1 className="logo mbl-menu-links">
              {/* attaches Blog Link to ('/blogFeed') if logged in, or to ('/') if else   */}
              {TokenService.hasAuthToken()
                ? this.renderBlogFeedLink()
                : this.renderLandingLink()}
            </h1>
          </div>
          {/* nav-grid item */}
          <div className=" mbl-menu-links">
            <ul className="mbl-ul">
              {/*renders login and register links to <TopNav/> if user is  logged out*/}
              <li>
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}

                <div >
                  <Link
                    style={{ display: `block`, color: `white` }}
                    to="/contact">
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
            {/* End of Post Dropdown */}
          </div>
        </div>
        {/* End of nav-grid */}
      </nav>
    )
  }
}

export default ToggleNav