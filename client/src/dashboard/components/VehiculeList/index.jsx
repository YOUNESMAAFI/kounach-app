import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="matricule" />
        <TextField source="type" />
        <TextField source="Marques" />
        <EditButton basePath="/vehicules" />
        <DeleteButton basePath="/vehicules" />
      </Datagrid>
    </List>
  );
};

export default UserList;
