"use client";

import { Button, Drawer } from "@mui/material";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import LoginDrawer from "./logindrawer";

export default function TopNavigation() {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (newOpen: boolean): MouseEventHandler<HTMLButtonElement> =>
    () => {
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
          <button className="top-navigation-buttons-button">
            Register as a Professional
          </button>
          <button className="top-navigation-buttons-button">Help</button>
          <button
            className="top-navigation-buttons-button"
            onClick={toggleDrawer(true)}
          >
            Login/Sign Up
          </button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <LoginDrawer toggleDrawer={toggleDrawer} />
          </Drawer>
        </div>
      </div>
    </div>
  );
}
