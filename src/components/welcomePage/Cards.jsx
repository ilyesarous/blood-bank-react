import {
  Bloodtype,
  Inventory,
  People,
  VolunteerActivism,
  Receipt,
  TableRows,
  Groups,
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

const cards = [
  {
    text: "Blood",
    icon: <Bloodtype color="primary" sx={{ margin: 1 }} />,
    link: "/blood",
  },
  {
    text: "Patients",
    icon: <People color="primary" sx={{ margin: 1 }} />,
    link: "/patients",
  },
  {
    text: "Donations",
    icon: <VolunteerActivism color="primary" sx={{ margin: 1 }} />,
    link: "/patients/donnation",
  },
  {
    text: "Stock",
    icon: <Inventory color="primary" sx={{ margin: 1 }} />,
    link: "/stock",
  },
  {
    text: "Request Form",
    icon: <Receipt color="primary" sx={{ margin: 1 }} />,
    link: "/demande_form",
  },
  {
    text: "Create new user",
    icon: <Groups color="primary" sx={{ margin: 1 }} />,
    link: "/add_user",
  },
];

const Cards = () => {
  const count = useSelector((state) => state.addDemande.count);
  const dispatch = useDispatch();
  const handleNotif = () => {
    dispatch(addActions.subtractCount(0));
  };
  return (
    <ShowCards>
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={5}
        justifyContent={"center"}
        width={"100%"}
      >
        {cards.map((card) => (
          <Card key={card.text} sx={{ width: { sm: "100%", md: "17%" } }}>
            <CardActionArea sx={{ padding: 1 }}>
              <Link to={card.link} style={{ textDecoration: "none" }}>
                <CardContent>
                  <Icons sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" color="primary">
                      {card.text}
                    </Typography>
                    {card.icon}
                  </Icons>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
        <Card sx={{ width: { sm: "100%", md: "17%" } }}>
          <CardActionArea onClick={handleNotif} sx={{ padding: 1 }}>
            <Link to="/demande_table" style={{ textDecoration: "none" }}>
              <CardContent>
                <Icons sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h6" color="primary">
                    Request Table
                  </Typography>
                  <Badge badgeContent={count} color="primary">
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
