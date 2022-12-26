import React from "react";
import { Datagrid, List, TextField } from "react-admin";

function CampaignList(props: any) {
  return (
    <List {...props}>
      <Datagrid {...props}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="status " />
      </Datagrid>
    </List>
  );
}
export default CampaignList;
