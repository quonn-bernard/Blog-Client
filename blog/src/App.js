import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Landing from "./Components/Landing/Landing";
import BlogFeed from "./Components/BlogFeed/BlogFeed";
import Registration from "./routes/Registration/Registration";
import Contact from "./Components/Contact/Contact";
import ToggleNav from "./Components/ToggleNav/ToggleNav";
import Backdrop from "./Components/Backdrop/Backdrop";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleNavOpen: false,
      ToggleMenuLinkOpen: false
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { ToggleNavOpen: !prevState.ToggleNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.drawerToggleClickHandler();
  };

  render() {
    let toggleNav;
    let backdrop;

    if (this.state.ToggleNavOpen) {
      toggleNav = <ToggleNav />;
      backdrop = <Backdrop backdropClick={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <TopNav hamburgerClick={this.drawerToggleClickHandler} />
        <main>
          {toggleNav}
          {backdrop}
          <Switch>
            <Route exact path={"/"} component={Landing}  />
            <Route path={"/blogFeed"} component={BlogFeed} />
            <Route path={"/register"} component={Registration} />
            <Route path={"/contact"} component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
