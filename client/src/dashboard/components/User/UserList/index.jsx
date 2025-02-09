import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="username" />
        <TextField source="id" />
        <EmailField source="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
