"use client";

import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import LoginDrawer from "./logindrawer";

export default function TopNavigation() {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openMobileButtons, setOpenMobileButtons] = useState<boolean>(false);

  const toggleLoginDrawer =
    (newOpen: boolean): MouseEventHandler<HTMLButtonElement> =>
    () => {
      setOpenLogin(newOpen);
    };

  const toggleMobileButtons =
    (newOpen: boolean): MouseEventHandler<HTMLButtonElement> =>
    () => {
      setOpenMobileButtons(newOpen);
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
            onClick={toggleLoginDrawer(true)}
          >
            Login/Sign Up
          </button>
          <Drawer
            anchor="right"
            open={openLogin}
            onClose={toggleLoginDrawer(false)}
          >
            <LoginDrawer toggleDrawer={toggleLoginDrawer} />
          </Drawer>
        </div>
        <button
          className="top-navigation-buttons-menu"
          onClick={toggleMobileButtons(true)}
        >
          <MenuIcon />
        </button>
        <Drawer
          anchor="right"
          open={openMobileButtons}
          onClose={toggleMobileButtons(false)}
        >
          <div className="top-navigation-buttons-drawer">
            <button className="top-navigation-buttons-mobile-button">
              Register as a Professional
            </button>
            <button className="top-navigation-buttons-mobile-button">
              Help
            </button>
            <LoginDrawer toggleDrawer={toggleLoginDrawer} />
          </div>
        </Drawer>
      </div>
    </div>
  );
}
