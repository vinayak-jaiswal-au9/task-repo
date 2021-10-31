import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthLogin from "./Components/Form/AuthLogin";
import Register from "./Components/Form/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={AuthLogin} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
