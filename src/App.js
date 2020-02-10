import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import GithubState from './context/github/GithubState'
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert( null ), 3000);
  };

    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar icon="fab fa-github"></Navbar>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    setAlert={showAlert}
                  ></Search>
                  <Users></Users>
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" component={About}></Route>
            <Route
              exact
              path="/user/:login"
              component={User}
            ></Route>
          </Switch>
        </div>
      </Router>
      </GithubState>
    );
}

export default App;
