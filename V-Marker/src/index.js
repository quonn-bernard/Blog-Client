import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FeedProvider } from "./contexts/FeedContext";
import { PostProvider } from "./contexts/PostContext"; 
import { NavProvider } from "./contexts/NavContext"; 
console.log(process.env)
ReactDOM.render(<BrowserRouter><FeedProvider><PostProvider><NavProvider><App /></NavProvider></PostProvider></FeedProvider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
