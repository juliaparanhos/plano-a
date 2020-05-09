import Register from "views/access/Register";
import Password from "views/access/ForgotPassword";

var routes = [
    {
      path: "/register",
      component: Register,
      layout: "/access"
    },
    {
      path: "/esqueceu-a-senha",
      component: Password,
      layout: "/access"
    },
  ];

  export default routes;