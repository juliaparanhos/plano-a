import Dashboard from "views/Dashboard.jsx";
import TableEvents from "views/events/tableevents/TableEvents.jsx";
import ViewEvent from "views/ViewEvent";
import ViewProviders from "views/ViewProviders";
import AddEvents from "views/AddEvents";
import Details from "views/Details";
import CalendarEvent from "views/CalendarEvent";
import Financial from "views/events/Financial";
import InternalMenu from "views/interno/InternalMenu";
import Team from "views/events/team/Team";
import FornecedoresEvents from "views/events/providersevents/TableFonecedoresEvents.jsx";
import AddProviders from "views/AddProviders";
import ProfileProviders from "views/events/profileproviders/ProfileProviders.jsx";
import DetailsProviders from "views/DetailsProviders";
import Email from "views/Email";
import Calendar from "views/Calendar";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/email",
    name: "Email",
    icon: "nc-icon nc-email-85",
    component: Email,
    layout: "/admin"
  },
  {
    path: "/calendario",
    name: "Agenda",
    icon: "nc-icon nc-calendar-60",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/fornecedores-interno",
    component: InternalMenu,
    layout: "/admin"
  },
  {
    path: "/Eventos",
    component: TableEvents,
    layout: "/admin"
  },
  {
    path: "/info/id",
    component: ViewEvent,
    layout: "/admin"
  },
  {
    path: "/equipe/id",
    component: Team,
    layout: "/admin"
  },
  {
    path: "/info/fornecedor/id",
    component: ViewProviders,
    layout: "/admin"
  },
  {
    path: "/detalhamento",
    component: Details,
    layout: "/admin"
  },
  {
    path: "/detalhamento-fornecedor",
    component: DetailsProviders,
    layout: "/admin"
  },
  {
    path: "/adicionar-evento",
    component: AddEvents,
    layout: "/admin"
  },
  {
    path: "/calendario-id",
    component: CalendarEvent,
    layout: "/admin"
  },
  {
    path: "/orcamento/id",
    component: Financial,
    layout: "/admin",
    name: null,
    icon: null
  },
  {
    path: "/fornecedores-eventos",
    component: FornecedoresEvents,
    layout: "/admin"
  },
  {
    path: "/adicionar-fornecedor", 
    component: AddProviders,
    layout: "/admin"
  },
  {
    path:"/perfil-fornecedor/id",
    component: ProfileProviders,
    layout: "/admin"
  },
  
];



export default routes;
