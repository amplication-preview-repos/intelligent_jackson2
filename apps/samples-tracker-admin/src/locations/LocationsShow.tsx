import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LOCATIONS_TITLE_FIELD } from "./LocationsTitle";

export const LocationsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <TextField label="address" source="address" />
        <ReferenceManyField
          reference="TrackingEvent"
          target="locationId"
          label="TrackingEvents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="action" source="action" />
            <TextField label="reference" source="reference" />
            <ReferenceField
              label="location"
              source="locations.id"
              reference="Locations"
            >
              <TextField source={LOCATIONS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};