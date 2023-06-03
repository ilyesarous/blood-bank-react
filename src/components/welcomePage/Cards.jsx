import {
  Bloodtype,
  Inventory,
  People,
  VolunteerActivism,
  Receipt,
  TableRows,
  PersonAdd,
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

  const role = useSelector((state) => state.auth.role);

  const cards = [
    {
      id: 1,
      text: "Blood",
      icon: <Bloodtype color="primary" sx={{ margin: 1 }} />,
      link: "/blood",
      role: "data responsable"
    },
    {
      id: 2,
      text: "Patients",
      icon: <People color="primary" sx={{ margin: 1 }} />,
      link: "/patients",
      role: "data responsable"
    },
    {
      id: 3,
      text: "Donations",
      icon: <VolunteerActivism color="primary" sx={{ margin: 1 }} />,
      link: "/patients/donation",
      role: "data responsable"
    },
    {
      id: 4,
      text: "Stock",
      icon: <Inventory color="primary" sx={{ margin: 1 }} />,
      link: "/stock",
      role: "stock responsable"
    },
    {
      id: 5,
      text: "Request Form",
      icon: <Receipt color="primary" sx={{ margin: 1 }} />,
      link: "/demande_form",
      role: "doctor, stock responsable"
    },
    {
      id: 6,
      text: "Request Table",
      icon: <TableRows color="primary" sx={{ margin: 1 }} />,
      link: "/demande_table",
      role: "doctor, stock responsable"
    },
    {
      id: 7,
      text: "Create new user",
      icon: <PersonAdd color="primary" sx={{ margin: 1 }} />,
      link: "/add_user",
      role: ""
    },
  
  ];

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
        {cards.filter( item => {
          return role.role === "admin" ? item : item.role.includes(role.role)
        }).map((card) => (
          <Card key={card.text} sx={{ width: { sm: "100%", md: "17%", xs: "100%" } }}>
            <CardActionArea sx={{ padding: 1 }}>
              <Link to={card.link} style={{ textDecoration: "none" }}>
                <CardContent>
                  <Icons sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" color="primary">
                      {card.text}
                    </Typography>
                    {card.text === "Request Table" ? (
                      <Badge onClick={handleNotif} badgeContent={count} color="primary">
                        {card.icon}
                      </Badge>
                    ) : (
                      card.icon
                    )}
                  </Icons>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
       
      </Stack>
    </ShowCards>
  );
};

export default Cards;
