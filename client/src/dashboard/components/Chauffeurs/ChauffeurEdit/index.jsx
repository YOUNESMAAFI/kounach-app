import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ChauffeurEdit = (props) => {
  return (
    <Edit title="Edit a Chauffeur" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default ChauffeurEdit;
