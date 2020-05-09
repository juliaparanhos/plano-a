import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import 'react-agenda/build/styles.css';
import 'react-datetime/css/react-datetime.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



import AdminLayout from "layouts/Admin.jsx";
import AccessLayout from "layouts/Access.jsx";
import Login from "./views/access/Login";
import Dash from "./views/Dashboard"
import {Authentication} from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Authentication() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/access" render={props => <AccessLayout {...props}/>} />
      <PrivateRoute path="/admin/dashboard" component={Dash} />
      <Route path="/" component={Login}/>
      {/*<Redirect to="/admin/signIn" />*/}
    </Switch>
  </Router>,
  document.getElementById("root")
);
