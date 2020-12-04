import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import axios from "axios";

const DashboardPanel = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
      <br />
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
    </div>
  );
};
export default DashboardPanel;
