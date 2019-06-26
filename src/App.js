import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./common/NavBar";
import Home from "./pages/home";
import store from "./store";
import "./static/css/reset.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <NavBar />
          <Route path="/" exact component={Home}></Route> 
        </HashRouter>
      </Provider>
    )
  }
}

export default App;
