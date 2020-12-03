import React from "react";
import { Admin, Resource, EditGuesser, ListGuesser } from "react-admin";

import DashboardPanel from "./components/DashboardPanel";
//Posts
import PostList from "./components/PostsComponents/PostList";
import PostCreate from "./components/PostsComponents/PostCreate";
import PostEdit from "./components/PostsComponents/PostEdit";
//Users
import UserList from "./components/User/UserList";
import UserCreate from "./components/User/UserCreate";
import UserEdit from "./components/User/UserEdit";
//Vehicules
import VehiculeList from "./components/Vehicules/VehiculeList";
import VehiculeCreate from "./components/Vehicules/VehiculeCreate";
import VehiculeEdit from "./components/Vehicules/VehiculeEdit";
//Chauffeurs
import ChauffeurList from "./components/Chauffeurs/ChauffeurList";
import ChauffeurCreate from "./components/Chauffeurs/ChauffeurCreate";
import ChauffeurEdit from "./components/Chauffeurs/ChauffeurEdit";

//Trajets
import TrajetList from "./components/Trajets/TrajetList";
import TrajetEdit from "./components/Trajets/TrajetEdit";

//Rest provider
import simpleRestProvider from "ra-strapi-rest";

//icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import MyLoginPage from "./components/LoginPage";
import Login from "../screens/Login";
import authProvider from "./components/Auth";

const dataProvider = simpleRestProvider("http://localhost:1337");

const Dashboard = () => {
  return (
    <div>
      <Admin
        title="KOUNACH"
        dashboard={DashboardPanel}
        dataProvider={dataProvider}
        // loginPage={Login}
        // authProvider={authProvider}
      >
        <Resource
          title="KOUNACH Dashboard"
          name="Dashboard"
          icon={DashboardIcon}
        />

        <Resource
          name="posts"
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
          icon={ArchiveIcon}
        />
        <Resource
          name="users"
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          icon={UnarchiveIcon}
        />
        <Resource
          name="vehicules"
          list={VehiculeList}
          create={VehiculeCreate}
          edit={VehiculeEdit}
          icon={LocalShippingIcon}
        />
        <Resource
          name="chauffeurs"
          list={ChauffeurList}
          create={ChauffeurCreate}
          edit={ChauffeurEdit}
          icon={AccountBoxIcon}
        />
        <Resource
          name="trajets"
          list={TrajetList}
          edit={TrajetEdit}
          icon={EmojiTransportationIcon}
        />
      </Admin>
    </div>
  );
};

export default Dashboard;
