import React from "react";
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import Landing from "./Components/Landing/Landing";
import ToggleNav from "./Components/ToggleNav/ToggleNav";
import Backdrop from "./Components/Backdrop/Backdrop";
import PostPage from "./Components/PostPage/PostPage";
import ResultPage from "./Components/ResultPage/ResultPage";
import SubscriberPage from "./Components/SubscriberPage/SubscriberPage";
import Footer from "./Components/Footer/Footer";
import BlogFeed from "./routes/BlogFeed/BlogFeed";
import Registration from "./routes/Registration/Registration";
import Login from "./routes/Login/Login";
import Create_Post from "./routes/Create_Post/Create_Post";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import TokenService from './services/token-service';
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

  render() {
    let toggleNav;
    let backdrop;

    if (this.state.ToggleNavOpen) {
      toggleNav = <ToggleNav />;
      backdrop = <Backdrop backdropClick={this.backdropClickHandler} />;
    }
     
    const PrivateRoute = ({ component: Component}) => (
      <Route render={() => (TokenService.hasAuthToken() ? <Component/> : <Redirect to='/login' /> )}  />
    )

    return (

      <div className="App">
        <TopNav hamburgerClick={this.drawerToggleClickHandler} />
        <main>
          {toggleNav}
          {backdrop}
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route path={"/bmFeed"} component={BlogFeed} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Registration} />
            <PrivateRoute path={"/create_post"} component={Create_Post} />
            <Route exact path={"/post/:postId"} render={props => <PostPage {...props}/>}/>
            <Route exact path={"/result/:resultId"} render={props => <ResultPage {...props}/>}/>
            <Route exact path={"/account/:username"} render={props => <SubscriberPage {...props}/>}/>
            <Route component={PageNotFound}/>
          </Switch>
          <Footer></Footer>
        </main>
      </div>
    );
  }
}

export default App;


