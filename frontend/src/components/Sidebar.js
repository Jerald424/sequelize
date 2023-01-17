import React, { useState } from "react";
import { Container } from "./BasicComponents";
import { HeadingText, Para } from "./Typography";
import "styles/sidebar.css";

import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { useColors } from "customHooks/ColorsHook";
import Icon from "./Icon";
import { ThemeStore } from "store/theme/colorStore";
import Hover from "./styleComponent/Hover";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const { colors } = useColors();
  const navigate = useNavigate();
  const { isDark } = ThemeStore.useState();
  const [toggle, setToggle] = useState(true);
  const [hover, setHover] = useState(false);

  const navigationAssets = [
    { name: "Home", link: "/", icon: BiHome },
    { name: "Profile", link: "/profile", icon: CgProfile },
    { name: "Friends", link: "#", icon: FiUsers },
    { name: "Settings", link: "#", icon: IoMdSettings },
  ];

  //   _____HANDLE__HOVER_TOGGLE_________
  const handleHover = (type) => {
    if (type === "on") {
      setHover(true);
      //   setToggle(true);
    } else {
      !toggle && setHover(false);
    }
  };

  //   ___HANDLE__TOGGLE___
  const handleToggle = () => {
    setToggle(!toggle);
    setHover(false);
  };
  return (
    <div className="sidebar-routes">
      <div
        onMouseEnter={() => handleHover("on")}
        onMouseLeave={() => handleHover("off")}
        className={`total-sidebar ${hover && "sidebar-absolute"} ${
          toggle || hover ? "total-sidebar-active" : "total-sidebar-inactive"
        } ${isDark ? "bg-dark" : "bg-light"}`}
        style={{ boxShadow: `2px 2px 3px ${colors?.popupBg}` }}
      >
        <div className="sidebar-toggle-part" onClick={handleToggle}>
          <div
            color
            className="toggle-round dajc"
            style={{
              backgroundColor: colors?.backgroundColor,
              boxShadow: `1px 1px 3px  ${colors?.textSecondary}`,
              color: colors?.textSecondary,
            }}
          >
            <SlArrowRight
              size={10}
              className={!toggle && "toggle-button-off"}
            />
          </div>
        </div>
        <div
          className="dfa mt-2"
          style={{ display: toggle || hover ? "flex" : "none" }}
        >
          <img src={require("assets/logo.png")} className="sidebar-logo me-3" />
          <HeadingText style={{ width: "150px" }}>App Name</HeadingText>
        </div>

        <div style={{ display: toggle || hover ? "block" : "none" }}>
          <div className="mt-5">
            {navigationAssets?.map((res, i) => (
              <Hover
                className="df p-2 mt-1 br-2 cp"
                key={i + "navigation"}
                onClick={() => navigate(res?.link)}
              >
                <Icon className="me-4" src={res?.icon} />
                <Para className="f1">{res?.name}</Para>
              </Hover>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`total-routes f1 ${
          toggle ? "total-routes-sidebar-on" : "total-routes-sidebar-off"
        } pt-3`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
