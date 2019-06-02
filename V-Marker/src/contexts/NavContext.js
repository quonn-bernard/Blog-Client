import React, { Component } from 'react'
import TokenService from '../services/token-service';

const NavContext = React.createContext({

  handleLogoutClick: () => { },
  test: () => {}

})

export default NavContext

export class NavProvider extends Component {

  // logout
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    localStorage.clear();
  }

  render() {
    const value = {
      handleLogoutClick: this.handleLogoutClick,
      test: this.test
    }

    return (
      <NavContext.Provider value={value}>
        {this.props.children}
      </NavContext.Provider>
    )
  }
}
