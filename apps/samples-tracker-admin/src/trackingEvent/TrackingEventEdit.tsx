import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LocationsTitle } from "../locations/LocationsTitle";

export const TrackingEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="action" source="action" />
        <TextInput label="reference" source="reference" />
        <ReferenceInput
          source="location.id"
          reference="Locations"
          label="location"
        >
          <SelectInput optionText={LocationsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
