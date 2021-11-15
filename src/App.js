import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Footer from "./Footer/Footer";
import AllReviews from "./Pages/AllReviews/AllReviews";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import HomeCars from "./Pages/Home/HomeCars/HomeCars";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder/PlaceOrder";
import Purchasing from "./Pages/Purchasing/Purchasing/Purchasing";
import Navigation from "./Pages/Shared/Navigation/Navigation";


function App() {
  return (
    <div className="App">
      <AuthProvider>
       <Router>
       <Navigation></Navigation>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/homeCars">
              <HomeCars />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/services/:id">
              <PlaceOrder />
            </Route> 
            <PrivateRoute exact path="/placeorder">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/allReviews">
              <AllReviews />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
