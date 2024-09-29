import {
  Person2Outlined,
  PlaceOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";

export default function TopNavigation() {
  return (
    <div className="top-navigation-city">
      <Image
        src="/images/brand-logo-white.png"
        alt="brand logo white"
        width="120"
        height="20"
        className="top-navigation-city-image"
      />
      <div className="top-navigation-city-textfields">
        <TextField
          variant="outlined"
          placeholder="Enter your location"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PlaceOutlined />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
            },
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Search for service"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
            },
          }}
        />
      </div>
      <div className="top-navigation-city-functions">
        <ShoppingCartOutlined />
        <Person2Outlined />
      </div>
    </div>
  );
}
