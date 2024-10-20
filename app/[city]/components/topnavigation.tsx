"use client";

import {
  Person2Outlined,
  PlaceOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopNavigation() {
  const params = useParams();
  const router = useRouter();
  const [locationName, setLocationName] = useState<string>("");

  useEffect(() => {
    setLocationName(params.city as string);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setLocationName(params.city as string);
    router.push("/" + event.target.value);
  };

  return (
    <div className="top-navigation-city">
      <Image
        src="/images/brand-logo-white.png"
        alt="brand logo white"
        width="120"
        height="20"
        className="top-navigation-city-image"
        onClick={() => router.push("/")}
      />
      <div className="top-navigation-city-textfields">
        <FormControl className="top-navigation-city-location-dropdown">
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select label="location" onChange={handleChange} value={locationName}>
            <MenuItem value={"Barcelona"}>Barcelona</MenuItem>
            <MenuItem value={"Madrid"}>Madrid</MenuItem>
            <MenuItem value={"Seville"}>Seville</MenuItem>
            <MenuItem value={"Valencia"}>Valencia</MenuItem>
            <MenuItem value={"Malaga"}>Malaga</MenuItem>
            <MenuItem value={"Cadiz"}>Cadiz</MenuItem>
            <MenuItem value={"Huelva"}>Huelva</MenuItem>
          </Select>
        </FormControl>
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
