import { Bloodtype, People, VolunteerActivism, VolunteerActivismOutlined } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Icons, ShowCards } from "../../theme/styles";

const Cards = () => {
  return (
    <ShowCards>
      <Card sx={{ width: { sm: "100%", md: "17%" } }}>
        <CardActionArea sx={{ padding: 1 }}>
          <Link to="/blood" style={{textDecoration: 'none'}}>
            <CardContent>
              <Icons sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" color="primary">Blood</Typography>
                <Bloodtype color="primary" sx={{ margin: 1 }} />
              </Icons>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
      <Card sx={{ width: { sm: "100%", md: "17%" } }}>
        <CardActionArea sx={{ padding: 1 }}>
          <Link to="/patients" style={{textDecoration: 'none'}}>
            <CardContent>
              <Icons sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" color="primary" >Patient</Typography>
                <People color="primary" sx={{ margin: 1 }} />
              </Icons>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
      <Card sx={{ width: { sm: "100%", md: "17%" } }}>
        <CardActionArea sx={{ padding: 1 }}>
          <Link to="/patients/donnation" style={{textDecoration: 'none'}}>
            <CardContent>
              <Icons sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" color="primary" >Donation</Typography>
                <VolunteerActivism color="primary" sx={{ margin: 1 }} />
              </Icons>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </ShowCards>
  );
};

export default Cards;
