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
      <TextField source="vehicule.Marques" />
      <TextField source="vehicule.matricule" />
      <EditButton basePath="/trajets" />
      <DeleteButton basePath="/trajets" />
    </Datagrid>
  </List>
);

export default TrajetList;
