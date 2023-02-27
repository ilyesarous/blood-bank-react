import { Settings } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import Cards from "./Cards";

const PageName = styled(Box)({
    display: "flex",
    margin: 50,
    justifyContent: "end",
    alignItems: "center",
    gap: 10
})

const Body = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <PageName>
        <Typography variant="h5" color="lightgrey" component="div">
          page name
        </Typography>
        <Settings sx={{width: 40, height: 40, color: "lightgrey"}}/>
      </PageName>
      <Cards />
    </Box>
  );
};

export default Body;
