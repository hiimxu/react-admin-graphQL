import React from "react";
import { Datagrid, List, TextField } from "react-admin";

function PartnerList(props: any) {
  return (
    <List {...props}>
      <Datagrid {...props}>
        <TextField source="id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
}
export default PartnerList;
