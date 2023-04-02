import {
  Bloodtype,
  Inventory,
  People,
  VolunteerActivism,
  Receipt,
  TableRows,
} from "@mui/icons-material";
import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Icons, ShowCards } from "../../theme/styles";
import { useDispatch, useSelector } from "react-redux";
import { addActions } from "../demande/store/AddSlice";

const Cards = () => {
  const count = useSelector((state) => state.addDemande.count);
  const dispatch = useDispatch()

  const handleNotif = () => {
    dispatch(addActions.subtractCount(0))
  }
  return (
    <ShowCards>
      <Stack
        width={"100%"}
        flexDirection={"row"}
        gap={5}
        justifyContent={"center"}
      >
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea sx={{ padding: 1 }}>
            <Link to="/blood" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Blood
                  </Typography>
                  <Bloodtype color="primary" sx={{ margin: 1 }} />
                </Icons>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea sx={{ padding: 1 }}>
            <Link to="/patients" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Patient
                  </Typography>
                  <People color="primary" sx={{ margin: 1 }} />
                </Icons>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea sx={{ padding: 1 }}>
            <Link to="/patients/donnation" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Donation
                  </Typography>
                  <VolunteerActivism color="primary" sx={{ margin: 1 }} />
                </Icons>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea sx={{ padding: 1 }}>
            <Link to="/stock" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Stock
                  </Typography>
                  <Inventory color="primary" sx={{ margin: 1 }} />
                </Icons>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Stack>
      <Stack
        width={"100%"}
        flexDirection={"row"}
        gap={5}
        marginTop={5}
        justifyContent={"center"}
      >
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea sx={{ padding: 1 }}>
            <Link to="/demande_form" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Demande Form
                  </Typography>
                  <Receipt color="primary" sx={{ margin: 1 }} />
                </Icons>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea onClick={handleNotif} sx={{ padding: 1 }}>
            <Link to="/demande_table" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Demande Table
                  </Typography>
                  <Badge badgeContent={count}  color="primary">
                    <TableRows color="primary" sx={{ margin: 1 }} />
                  </Badge>
                </Icons>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Stack>
    </ShowCards>
  );
};

export default Cards;
