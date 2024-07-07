import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ActionTypesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
