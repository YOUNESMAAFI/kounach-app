import React from "react";
import { Admin, Resource } from "react-admin";

import DashboardPanel from "./components/DashboardPanel";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import VehiculeList from "./components/VehiculeList";
import VehiculeCreate from "./components/VehiculeCreate";
import VehiculeEdit from "./components/VehiculeEdit";

//Rest provider
import simpleRestProvider from "ra-strapi-rest";

//icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ArchiveIcon from "@material-ui/icons/Archive";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

// import jsonServerProvider from "ra-data-json-server";
// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
// import restProvider from "ra-data-simple-rest";
const dataProvider = simpleRestProvider("http://localhost:1337");

const Dashboard = () => {
  return (
    <div>
      <Admin dashboard={DashboardPanel} dataProvider={dataProvider}>
        <Resource name="Dashboard" icon={DashboardIcon} />

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
      </Admin>
      {/* <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList}  />
      </Admin> */}
    </div>
  );
};

export default Dashboard;
