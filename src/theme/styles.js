import { Box, Modal, styled, Toolbar } from "@mui/material";

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  justifyContent: "space-between",
}));

export const Text = styled(Box)(({theme})=>({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  
}));

export const ShowCards = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "10%",
  padding: 20,
  gap: 20,
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}))


