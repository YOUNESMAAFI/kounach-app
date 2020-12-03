import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField,
  DateField,
  NumberField,
} from "react-admin";

const TrajetList = (props) => (
  <List {...props}>
    <Datagrid>
      <ArrayField source="chauffeurs">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="depart" />
      <DateField source="depart_date" />
      <TextField source="arrival" />
      <DateField source="arrival_date" />
      <DateField source="published_at" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <NumberField source="__v" />
      <TextField source="vehicule.Marques" />
      <TextField source="matricule" />
      <EditButton basePath="/trajets" />
      <DeleteButton basePath="/trajets" />
    </Datagrid>
  </List>
);

export default TrajetList;
