import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./containers/List";
import Detail from "./containers/Detail";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path={"/"} exact component={List} />
          <Route path={"/character/:character"} exact component={Detail} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
