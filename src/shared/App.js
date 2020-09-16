import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Testing from "../pages/testing";
import ErrorPageNotFound from "../pages/404";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/testing" component={Testing} />
          {/* /login 으로 접근하면 무조건 /index.html 로 redirect 되는데, 이건 firebase.json 에 redirect 를 실수로 permanent 로 해놔서 그럼 */}
          <ErrorPageNotFound />
        </Switch>
      </div>
    );
  }
}

export default App;
