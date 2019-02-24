import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
