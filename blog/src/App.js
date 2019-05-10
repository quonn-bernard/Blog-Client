import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Landing from "./Components/Landing/Landing";
import Contact from "./Components/Contact/Contact";
import ToggleNav from "./Components/ToggleNav/ToggleNav";
import Backdrop from "./Components/Backdrop/Backdrop";
import PostPage from "./Components/PostPage/PostPage";
import SubscriberPage from "./Components/SubscriberPage/SubscriberPage";
import BlogFeed from "./routes/BlogFeed/BlogFeed";
import Registration from "./routes/Registration/Registration";
import Login from "./routes/Login/Login";
import Create_Post from "./routes/Create_Post/Create_Post";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ToggleNavOpen: false,
      ToggleMenuLinkOpen: false,
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

  logout() {
    console.log('logout');
  }

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
            <Route exact path={"/"} component={Landing} />
            <Route path={"/blogFeed"} component={BlogFeed} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Registration} />
            <Route path={"/create_post"} component={Create_Post} />
            <Route path={"/contact"} component={Contact} />
            <Route exact path={"/post/:postId"} render={props => <PostPage {...props}/>}/>
            <Route exact path={"/account/:username"} render={props => <SubscriberPage {...props}/>}/>
            <Route component={PageNotFound}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;


