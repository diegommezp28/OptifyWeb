import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <Router>
          <Switch>
            <Route path="">
              <CustomNavbar></CustomNavbar>
              <Demo></Demo>
              <section id="main-content">
                {/* <Switch>
                  <Route path='/' exact component={Landing} />
                  <Route path='/login' component={() => <Login />} />
                  <Route path='/register' component={() => <Register />} />
                  <Route path='/donate' component={DonationForm} />
                  <Route path='/report' component={Report} />
                  <Route path='/foundations' component={Foundation} />
                  <Route path='/foundations' component={Foundation} />
                </Switch> */}
              </section>
              {/* <Footer /> */}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
