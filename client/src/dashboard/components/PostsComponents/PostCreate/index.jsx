import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create {...props} title="Create a Post">
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
