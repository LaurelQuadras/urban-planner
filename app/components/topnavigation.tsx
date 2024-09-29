"use client";

import { Button, Drawer } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import LoginDrawer from "./logindrawer";

export default function TopNavigation() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="top-navigation">
      <div className="top-navigation-margin">
        <Image
          src="/images/brand-logo.png"
          alt="brand logo"
          width="140"
          height="140"
        />
        <div className="top-navigation-buttons">
          <Button className="top-navigation-buttons-button">
            Register as a Professional
          </Button>
          <Button className="top-navigation-buttons-button">Help</Button>
          <Button
            className="top-navigation-buttons-button"
            onClick={toggleDrawer(true)}
          >
            Login/Sign Up
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <LoginDrawer toggleDrawer={toggleDrawer} />
          </Drawer>
        </div>
      </div>
    </div>
  );
}
