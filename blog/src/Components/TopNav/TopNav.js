import React from "react";
import { Link } from "react-router-dom";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import Dropdown from "../Dropdown/Dropdown";
import { Hyph } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import "./TopNav.css";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        {
          id: 0,
          title: "Category",
          selected: false,
          key: "category"
        },
        {
          id: 1,
          title: "Category",
          selected: false,
          key: "category"
        },
        {
          id: 2,
          title: "Category",
          selected: false,
          key: "category"
        }
      ]
    };
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Hyph />
        <Link
          to='/create_post'>
          Create Post
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav>
        <div className="nav-grid">
          <div className="nav-grid-item">
            <a className="navLinks">
              <h1 className="logo">
                <Link Link to="/">
                  Blog
                </Link>
              </h1>
            </a>
          </div>

          <div className="nav-grid-item-2">
            <HamburgerBtn click={this.props.hamburgerClick} />
            <ul>
              <li>
                <Dropdown title="Select category" list={this.state.category} />
              </li>
              <li>
                {/* <Link className="navLinks" to="/login">
                  Login
                </Link> */}
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}
              </li>
              
              {/* <li>
                <Link className="navLinks" to="/register">
                  Register
                </Link>
              </li> */}
              
              <li>
                <Link className="navLinks" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
