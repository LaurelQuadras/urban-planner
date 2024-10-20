"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LocationSection() {
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    router.push("/" + event.target.value);
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
            <Select label="location" onChange={handleChange}>
              <MenuItem value={"Barcelona"}>Barcelona</MenuItem>
              <MenuItem value={"Madrid"}>Madrid</MenuItem>
              <MenuItem value={"Seville"}>Seville</MenuItem>
              <MenuItem value={"Valencia"}>Valencia</MenuItem>
              <MenuItem value={"Malaga"}>Malaga</MenuItem>
              <MenuItem value={"Cadiz"}>Cadiz</MenuItem>
              <MenuItem value={"Huelva"}>Huelva</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
