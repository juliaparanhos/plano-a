import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "access.js";


class Login extends React.Component{
    render(){
      const style =  {
           
        backgroundColor: "#f4f3ef"
    }
        return(
          <div className="wrapper" style={style}>
         
          <div className="main-panel" ref={this.mainPanel}>
            <Switch>
              {routes.map((prop, key) => {
                return (
                  <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
        )
    }
}

export default Login;