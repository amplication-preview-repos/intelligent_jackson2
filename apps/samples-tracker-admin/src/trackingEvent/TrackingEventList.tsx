import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCATIONS_TITLE_FIELD } from "../locations/LocationsTitle";

export const TrackingEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TrackingEvents"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
