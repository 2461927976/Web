/*
 * @Author: zzj
 * @Date: 2020-12-15 15:15:35
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-15 21:53:14
 * @Description:
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/home";
import Layout1 from "./components/layout";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout1>
          <Route exact path="/" component={Home}></Route>
        </Layout1>
      </Router>
    );
  }
}

export default App;
