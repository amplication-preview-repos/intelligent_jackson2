import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BoxesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="barcode" source="barcode" />
      </SimpleForm>
    </Edit>
  );
};
