import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import './Dashboard.css';
import AddService from "../AddService/AddService";
import Review from "../Review/Review";
import MyBookings from "../BookingList/BookingList";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import Payments from "../Payments/Payments";
import useFirebase from "../../../hooks/useFirebase";
import MyBooking from "../MyBooking/MyBooking";
import ManageOrder from "../ManageOrder/ManageOrder";
import { Box } from "@mui/system";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://fathomless-headland-38595.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);

  console.log(isAdmin);
  
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3">
            <div className="dashboard">
              <h5></h5>
              { !isAdmin &&
              <Box>
                 <Link to={`${url}`}>
                   <li className="dashboard-menu mt-5 text-decoration-none">Dashboard</li>
                 </Link>
                 <Link to={`${url}/myBooking`}>
                   <li className="dashboard-menu mt-5 text-decoration-none">My-Booking</li>
                 </Link>
                 <Link to={`${url}/payments`}>
                   <li className="dashboard-menu mt-5 text-decoration-none">Payments</li>
                 </Link>
                 <Link to={`${url}/review`}>
                   <li className="dashboard-menu mt-5 text-decoration-none">Review</li>
                 </Link>
              </Box> 
             }
             { isAdmin &&
                <div className="admin-dashboard pt-5">
                     <Link className="p-3" to={`${url}/manageOrder`}>
                       <li className="dashboard-menu mt-5 text-decoration-none">Manage Order</li>
                     </Link>
                     <Link className="p-3" to={`${url}/addService`}>
                       <li className="dashboard-menu">Add Service</li>
                     </Link>
                
                   <Link className="p-3" to={`${url}/makeAdmin`}>
                     <li className="dashboard-menu text-decoration-none">Make Admin</li>
                   </Link>
                   <Link className="p-3" to={`${url}/manageServices`}>
                     <li className="dashboard-menu text-decoration-none">Manage Service</li>
                   </Link>
                 </div>
               }
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/myBooking`}>
                <MyBooking></MyBooking>
              </Route>
              <Route exact path={`${path}/payments`}>
                <Payments></Payments>
              </Route>
              <Route exact path={`${path}/manageOrder`}>
                <ManageOrder></ManageOrder>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddService></AddService>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
