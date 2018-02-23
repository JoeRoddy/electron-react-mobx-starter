import React, { PropTypes } from "react";
import { Route } from "react-router-dom";
import { observer } from "mobx-react";

import Header from "./components/reusable/Header";
import Todos from "./components/Todos";
import NameSaver from "./components/NameSaver";
import Home from "./components/Home";

@observer
class Routes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />

          <Route path="/todos" component={Todos} />
          <Route path="/nameSaver" component={NameSaver} />
        </div>
      </div>
    );
  }
}

export default Routes;
