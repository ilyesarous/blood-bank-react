import { Bloodtype, People } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Icons, ShowCards } from "../../theme/styles";

const Cards = () => {

  return (
    <ShowCards >
      <Card sx={{width: {sm: "100%",md: "17%"}}}>
        <CardActionArea sx={{ padding: 1 }}>
          <CardContent>
            <Icons sx={{justifyContent: "space-between"}}>
              <Typography variant="h6">Word of the Day</Typography>
              <Bloodtype color="primary" sx={{ margin: 1 }} />
            </Icons>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{width: {sm: "100%",md: "17%"}}}>
        <CardActionArea sx={{ padding: 1 }}>
          <CardContent>
            <Icons sx={{justifyContent: "space-between"}}>
              <Typography variant="h6">Patien</Typography>
              <People color="primary" sx={{ margin: 1 }} />
            </Icons>
          </CardContent>
        </CardActionArea>
      </Card>
    </ShowCards>
  );
};

export default Cards;
