import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create {...props} title="Create a User">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
