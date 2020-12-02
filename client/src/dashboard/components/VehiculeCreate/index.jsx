import React from "react";
import { Create, SimpleForm, TextInput, SelectInput } from "react-admin";

const UserCreate = (props) => {
  return (
    <Create {...props} title="Create a Vehicule">
      <SimpleForm>
        <TextInput source="matricule" />
        <SelectInput
          source="Marques"
          choices={[
            { id: "Ammanazdazdn", name: "Amazdazdmann" },
            { id: "Ammann", name: "Ammann" },
            { id: "Balawin", name: "Balawin" },
            { id: "Behr", name: "Behr" },
            { id: "Cat", name: "Cat" },
            { id: "Deutz", name: "Deutz" },
            { id: "Ford", name: "Ford" },
            { id: "Gebpants", name: "Gebpants" },
            { id: "Hyundai", name: "Hyundai" },
            { id: "Komatsu", name: "Komatsu" },
            { id: "Man", name: "Man" },
            { id: "Merlospa", name: "Merlospa" },
            { id: "Nissan", name: "Nissan" },
            { id: "Onnuri", name: "Onnuri" },
            { id: "Planetfilter", name: "Planetfilter" },
            { id: "Renault", name: "Renault" },
            { id: "Sacer", name: "Sacer" },
            { id: "Trex", name: "Trex" },
            { id: "Toyota", name: "Toyota" },
          ]}
        />
        <SelectInput
          source="type"
          choices={[
            { id: "Camiazdazdon", name: "Camiazdazdon" },
            { id: "Camion", name: "Camion" },
            { id: "SemiRemorque", name: "SemiRemorque" },
            { id: "Plateau", name: "Plateau" },
            { id: "T10", name: "T10" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
