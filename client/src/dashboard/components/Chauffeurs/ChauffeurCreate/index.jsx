import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ChauffeurCreate = (props) => {
  return (
    <Create {...props} title="Create a Chauffeur">
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export default ChauffeurCreate;
