import * as React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Appbar from "../../components/Appbar/Appbar";
import styles from "./Profile.module.css";
import {
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  CssBaseline,
  Paper,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function Profile() {
  const [value, setValue] = React.useState(null);
  const [race, setRace] = React.useState("");

  function handleChange(race) {
    setRace(race);
  }

  return (
    <>
      <CssBaseline />
      {/* <Appbar /> */}
      {/* <Sidebar /> */}
      <Container>
        <Grid className={styles.gridContainer} container spacing={2}>
          <Typography
            fullwidth
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
          >
            Profile
          </Typography>
          <Grid item md={12}>
            <Paper className={styles.box}>
              <Typography variant="body1" component="h4">
                Profile Picture
              </Typography>
              <Avatar
                sx={{ width: 80, height: 80 }}
                alt="profile picture"
                src="#"
              />
              <Button variant="outlined" size="small">
                Update Profile Picture
              </Button>
            </Paper>
          </Grid>
          <Grid item md={12}>
            <Paper className={styles.personal_details}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Typography>Personal Details</Typography>
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="First Name"
                    defaultValue="John"
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Last Name"
                    defaultValue="Doe"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      minDate={dayjs("1903-01-01")}
                      label="Date of Birth"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      // value={age}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Race</InputLabel>
                    <Select
                      // value={age}
                      label="Race"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Black"}>Black</MenuItem>
                      <MenuItem value={"White"}>White</MenuItem>
                      <MenuItem value={"Asian"}>Asian</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} paddingY={2}>
                <Grid item lg={6}>
                  <FormControl fullWidth>
                    <InputLabel>Major of Study</InputLabel>
                    <Select
                      // value={age}
                      label="Major of Study"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Tech"}>Tech</MenuItem>
                      <MenuItem value={"Law"}>Law</MenuItem>
                      <MenuItem value={"Sales"}>Sales</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={6}>
                  <FormControl fullWidth>
                    <InputLabel>Financial Goal</InputLabel>
                    <Select
                      // value={age}
                      label="Financial Goal"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Make Money"}>Make Money</MenuItem>
                      <MenuItem value={"Build a company"}>
                        Build a company
                      </MenuItem>
                      <MenuItem value={"Learn skills"}>Learn skills</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Phone Number"
                  defaultValue="(677)-356-1278"
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" size="small">
                  Update Personal Details
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={12}>
            <Paper className={styles.resume}>
              <Grid container lg={12}>
                <Grid item lg={12}>
                  <Typography>Resume</Typography>
                </Grid>
                <Grid item lg={12}>
                  <Button
                    variant="outlined"
                    size="small"
                    component="label"
                    fullWidth
                  >
                    Upload Resume
                    <input type="file" hidden />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={12}>
            <Paper className={styles.resume}>
              <Grid item lg={12}>
                <Typography>Profile Details</Typography>
              </Grid>
              <Grid item lg={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Update Email"
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Update Password"
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" size="small">
                  Update Profile Details
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
