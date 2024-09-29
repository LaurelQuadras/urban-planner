"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function LocationSection() {
  const [locationValue, setLocationValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocationValue(event.target.value as string);
  };

  return (
    <div className="location-section">
      <div className="location-section-image-container">
        <Image
          src="/images/advertisement-image.png"
          alt="advertisement image"
          className="location-section-image-container-image"
          width="800"
          height="800"
        />
        <div className="location-section-image-container-overlay"></div>
      </div>
      <div className="location-section-information">
        <span className="location-section-information-brand">
          Urban Company
        </span>
        <span className="location-section-information-text-one">
          Quality home services, on demand
        </span>
        <span className="location-section-information-text-two">
          Experienced, hand-picked Professionals to serve you at your doorstep
        </span>
        <div className="location-section-information-container">
          <span className="location-section-information-container-text">
            Where do you need a service?
          </span>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              value={locationValue}
              label="location"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
