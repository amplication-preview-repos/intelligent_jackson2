import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LocationsTitle } from "../locations/LocationsTitle";

export const TrackingEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
