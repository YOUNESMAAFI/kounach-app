import React from "react";
import {
  Edit,
  SimpleForm,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
} from "react-admin";

const TrajetEdit = (props) => {
  console.log(props);
  return (
    <Edit {...props}>
      <SimpleForm>
        <ArrayInput source="chauffeurs">
          <SimpleFormIterator>
            <ReferenceInput source="_id" reference="s">
              <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="identifier" />
          </SimpleFormIterator>
        </ArrayInput>
        <ReferenceInput source="vehicule.Marques" reference="vehicule">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="depart" />
        <DateInput source="depart_date" />
        <DateInput source="arrival_date" />
        <TextInput source="arrival" />
        <TextInput source="vehicule.Marques" />
      </SimpleForm>
    </Edit>
  );
};
export default TrajetEdit;
