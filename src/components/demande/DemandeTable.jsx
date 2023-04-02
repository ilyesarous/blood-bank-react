import { Box, Stack, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import DesignDemande from "./designDemande";
import styled from "@emotion/styled";

const PageName = styled(Box)({
  display: "flex",
  margin: 50,
  justifyContent: "end",
  alignItems: "center",
  gap: 10
})

const DemandeTable = () => {
  const [table, setTable] = useState([]);

  const getDemandeDataHandler = useCallback(async () => {
    try {
      const demande = await fetch(
        "http://localhost:9005/blood-bank/demandeeee"
      );
      if (!demande.ok) throw new Error("something went wrong!");
      const data = await demande.json();
      setTable(data);
    } catch (error) {
      console.log(console.error);
    }
  }, []);

  useEffect(() => {
    getDemandeDataHandler();
  }, [getDemandeDataHandler]);

  return (
    <Stack>
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          Requests Page
        </Typography>
        <Settings sx={{width: 40, height: 40, color: "lightgrey"}}/>
      </PageName>
      {table.map((tab) => (
        <DesignDemande key={tab.code} demande={tab} />
      ))}
    </Stack>
  );
};

export default DemandeTable;
