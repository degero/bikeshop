import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./common/NotFound";
import "./App.css";
import BikesPage from "./bikes/BikesPage";
import BikeCrudForm from "./bikes/BikeCrudForm";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
      <div className="container-fluid main-body">
        <div className="row flex-xl-nowrap px-lg-5">
          <main className="col-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/bikes" component={BikesPage} />
              <Route path="/bike/:slug" component={BikeCrudForm} />
              <Route path="/bike" component={BikeCrudForm} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
