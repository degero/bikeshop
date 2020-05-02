import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./common/NotFound";
import "./App.css";
import BikesPage from "./bikes/BikesPage";
import BikeCrudForm from "./bikes/BikeCrudForm";

function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class="row flex-xl-nowrap px-lg-5">
          <main class="col-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bikes" component={BikesPage} />
              <Route path="/bikes/:slug" component={BikeCrudForm} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
