import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home"; //路由组件
import About from "./pages/About"; //路由组件
import Test from "./pages/Test"; //路由组件
import Header from "./components/Header"; //一般组件
import MyNavLink from "./components/MyNavLink"; //一般组件
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 在原生js中使用a标签来跳转不同的页面 */}
                {/* <a className="list-group-item active" href="./about.html">
                  About
                </a>
                <a className="list-group-item" href="./home.html">
                  Home
                </a> */}

                {/* 在react中靠路由链接实现切换组件 */}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home/a/ab">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    {/* 注册路由 */}
                    <Route path="/about" component={About} />
                    <Route exact path="/home" component={Home} />
                    {/* <Route path="/home" component={Test} /> */}
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
