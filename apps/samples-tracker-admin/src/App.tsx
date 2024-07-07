import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LocationsList } from "./locations/LocationsList";
import { LocationsCreate } from "./locations/LocationsCreate";
import { LocationsEdit } from "./locations/LocationsEdit";
import { LocationsShow } from "./locations/LocationsShow";
import { SamplesList } from "./samples/SamplesList";
import { SamplesCreate } from "./samples/SamplesCreate";
import { SamplesEdit } from "./samples/SamplesEdit";
import { SamplesShow } from "./samples/SamplesShow";
import { ShipmentsList } from "./shipments/ShipmentsList";
import { ShipmentsCreate } from "./shipments/ShipmentsCreate";
import { ShipmentsEdit } from "./shipments/ShipmentsEdit";
import { ShipmentsShow } from "./shipments/ShipmentsShow";
import { BoxesList } from "./boxes/BoxesList";
import { BoxesCreate } from "./boxes/BoxesCreate";
import { BoxesEdit } from "./boxes/BoxesEdit";
import { BoxesShow } from "./boxes/BoxesShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { ActionTypesList } from "./actionTypes/ActionTypesList";
import { ActionTypesCreate } from "./actionTypes/ActionTypesCreate";
import { ActionTypesEdit } from "./actionTypes/ActionTypesEdit";
import { ActionTypesShow } from "./actionTypes/ActionTypesShow";
import { TrackingEventList } from "./trackingEvent/TrackingEventList";
import { TrackingEventCreate } from "./trackingEvent/TrackingEventCreate";
import { TrackingEventEdit } from "./trackingEvent/TrackingEventEdit";
import { TrackingEventShow } from "./trackingEvent/TrackingEventShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SamplesTracker"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Locations"
          list={LocationsList}
          edit={LocationsEdit}
          create={LocationsCreate}
          show={LocationsShow}
        />
        <Resource
          name="Samples"
          list={SamplesList}
          edit={SamplesEdit}
          create={SamplesCreate}
          show={SamplesShow}
        />
        <Resource
          name="Shipments"
          list={ShipmentsList}
          edit={ShipmentsEdit}
          create={ShipmentsCreate}
          show={ShipmentsShow}
        />
        <Resource
          name="Boxes"
          list={BoxesList}
          edit={BoxesEdit}
          create={BoxesCreate}
          show={BoxesShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="ActionTypes"
          list={ActionTypesList}
          edit={ActionTypesEdit}
          create={ActionTypesCreate}
          show={ActionTypesShow}
        />
        <Resource
          name="TrackingEvent"
          list={TrackingEventList}
          edit={TrackingEventEdit}
          create={TrackingEventCreate}
          show={TrackingEventShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
