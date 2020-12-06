import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import axios from "axios";
import ShowChauffeur from "./ShowChauffeur";

const DashboardPanel = () => {
  const fetchData = async () => {
    const data = await axios.get("'http://localhost:1337/posts'");
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader title="Bienvenue sur la panneau d'adminstration" />
        <CardContent>
          Utiliser KOUNACH pour récolté vos donnée <br />
          Demandez à votre administrateur de rajoutez de nouvelle
          fonctionalitées.
        </CardContent>
      </Card>
      <br />
      <Card></Card>
    </div>
  );
};
export default DashboardPanel;
