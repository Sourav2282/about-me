import React, { useState } from "react";
import ListIcon from "@material-ui/icons/List";
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/navbar.css";

function StickyNav(props) {
  const [displayNav, setdisplayNav] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  const toggleVisible = () => {
    setdisplayNav(scrollIdentifier());
    !scrollIdentifier() && setToggleActive(false);
  };

  const onActiveToggle = () => {
    setToggleActive(!toggleActive);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      style={{ display: displayNav ? "inline" : "none" }}
      className="nav-container"
    >
      {/* <ListIcon /> */}

      <div
        id="circularMenu1"
        class={`${
          toggleActive ? "active" : ""
        } circular-menu circular-menu-left`}
      >
        <a class="floating-btn" onClick={onActiveToggle}>
          <ListIcon color="primary"  class="iconSize" />
        </a>

        <menu class="items-wrapper">
          <a href="#" class="menu-item fa fa-home"></a>
          <a href="#" class="menu-item fa fa-user"></a>
          <a href="#" class="menu-item fa fa-pie-chart"></a>
          <a href="#" class="menu-item fa fa-cog"></a>
          <a href="#" class="menu-item fa fa-pie-chart"></a>
          <a href="#" class="menu-item fa fa-cog"></a>
        </menu>
      </div>
    </div>
  );
}

export default StickyNav;
