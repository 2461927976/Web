/*
 * @Author: zzj
 * @Date: 2021-01-19 22:22:24
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-28 22:18:21
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
