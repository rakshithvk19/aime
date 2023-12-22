import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import DrillVideo from "../../components/DrillVideo/DrillVideo";
import Description from "../../components/DrillDescription";
import CommentsContainer from "../../components/CommentsContainer";
import Appbar from "../../components/Appbar/Appbar";

function Lesson() {
  const navigate = useNavigate();

  const handleTestYourself = () => {
    navigate("/Training");
  };

  return (
    <>
      <Appbar />
      <main>
        <CssBaseline />
        <Container marginY={1}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item lg={12}>
              <Typography variant="h3" component="h1" align="center">
                Anyone can sell
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <DrillVideo />
            </Grid>
            <Grid item xs={12}>
              <Description />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleTestYourself}
              >
                Test yourself
              </Button>
            </Grid>
            <Grid item xs={12}>
              <CommentsContainer />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Lesson;
