import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { MouseEventHandler, useState } from "react";

export type LoginDrawerProps = {
  toggleDrawer: (value: boolean) => MouseEventHandler<HTMLButtonElement>;
};

export default function LoginDrawer({ toggleDrawer }: LoginDrawerProps) {
  const [locationCode, setLocationCode] = useState<string>("20");

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setLocationCode(event.target.value);
  };

  return (
    <div>
      <Box className="login-drawer" role="presentation">
        <div className="login-drawer-info">
          <button
            onClick={toggleDrawer(false)}
            className="login-drawer-info-close-icon"
          >
            <Close />
          </button>
          <span className="login-drawer-info-text">
            Please login to continue
          </span>
        </div>
        <Divider />
        <div className="login-drawer-content">
          <FormControl sx={{ width: 100 }}>
            <InputLabel>Code</InputLabel>
            <Select
              value={locationCode}
              label="Location Code"
              onChange={handleChange}
              className="login-drawer-content-dropdown"
              sx={{ borderRadius: 0 }}
            >
              <MenuItem className="login-drawer-content-dropdown" value={10}>
                India
              </MenuItem>
              <MenuItem className="login-drawer-content-dropdown" value={20}>
                Spain
              </MenuItem>
              <MenuItem className="login-drawer-content-dropdown" value={30}>
                Australia
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
                height: "53px",
              },
            }}
            className="login-drawer-content-text"
            variant="outlined"
            placeholder="Your phone number"
          />
        </div>
        <Button className="login-drawer-continue-button" variant="contained">
          Continue
        </Button>
      </Box>
    </div>
  );
}
