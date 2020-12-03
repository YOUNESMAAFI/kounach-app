import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ChauffeurList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="id" />
        <EditButton basePath="/chauffeurs" />
        <DeleteButton basePath="/chauffeurs" />
      </Datagrid>
    </List>
  );
};

export default ChauffeurList;
