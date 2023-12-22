import { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import SortIcon from "@mui/icons-material/Sort";

export default function AddComment() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    // Handle the selected option here
    console.log(`Selected option: ${option}`);
    handleClose();
  };

  return (
    <>
      <Grid container padding={1} spacing={1}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "row", columnGap: "1rem" }}
        >
          <Typography variant="h6" component="h6">
            2,893 Comments
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", columnGap: "1rem" }}
          >
            <Button
              variant="text"
              onClick={handleClick}
              startIcon={<SortIcon />}
            >
              Sort By
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleOptionClick("Newest First")}>
                Newest First
              </MenuItem>
              <MenuItem onClick={() => handleOptionClick("Top Comments")}>
                Top Comments
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: "1rem",
            alignItems: "center",
          }}
        >
          <Avatar />
          <TextField
            placeholder="Add a comment..."
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
