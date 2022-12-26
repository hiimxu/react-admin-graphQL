import React from "react";
import { Admin, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import PartnerList from "./pages/partnerPage/PartnerList";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { dataProvider } from "./dataProvider";
import CampaignList from "./pages/campaignPage/CampaignList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="partnerPage"
        options={{ label: "Partner" }}
        list={PartnerList}
      />
      <Resource
        name="campaignPage"
        options={{ label: "Campaign" }}
        list={CampaignList}
      />
    </Admin>
  );
}

export default App;
