import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BoxesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="barcode" source="barcode" />
      </SimpleForm>
    </Create>
  );
};
