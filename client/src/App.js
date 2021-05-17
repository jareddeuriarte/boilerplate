import React, { useState } from "react";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import AddSnippet from "./Pages/AddSnippet";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={AddSnippet} />
        </Switch>
        <div className="d-flex justify-content-center">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
