import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TopNav from "./Components/TopNav/TopNav"
import Landing from "./Components/Landing/Landing";
import ToggleNav from "./Components/ToggleNav/ToggleNav";
import Backdrop from "./Components/Backdrop/Backdrop";
import PostPage from "./Components/PostPage/PostPage";
import ResultPage from "./Components/ResultPage/ResultPage";
import Footer from "./Components/Footer/Footer";
import BlogFeed from "./routes/BlogFeed/BlogFeed";
import Registration from "./routes/Registration/Registration";
import Login from "./routes/Login/Login";
import Create_Post from "./routes/Create_Post/Create_Post";
import PageNotFound from "./routes/PageNotFound/PageNotFound";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Backdrop/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Backdrop></Backdrop>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Landing/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Landing></Landing></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<PostPage/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostPage></PostPage>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<ResultPage/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultPage></ResultPage>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Footer/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer></Footer>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Registration/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registration></Registration>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Login/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login></Login>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Create_Post/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Create_Post></Create_Post>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<PageNotFound/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageNotFound></PageNotFound>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<BlogFeed/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><BlogFeed></BlogFeed></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<TopNav/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><TopNav></TopNav></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<ToggleNav/> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ToggleNav></ToggleNav></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

