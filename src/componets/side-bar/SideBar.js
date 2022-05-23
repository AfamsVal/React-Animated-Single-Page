import React from "react";
import ArrowRight from "../icons/ArrowRight";
import "./SideBar.css";
import { SIDE_ITEMS } from "./sideItems";

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ismouseOver, setIsMouseOver] = React.useState(false);
  return (
    <div
      className={`sidebar ${isOpen ? "fullNav" : ""} ${
        ismouseOver ? "sidebarXtra" : ""
      }`}
    >
      <div className="menu">
        <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
        </div>
      </div>
      {SIDE_ITEMS.map((item) => (
        <div
          key={item.id}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
          className="menuItem"
        >
          {item.title}
        </div>
      ))}

      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        className="arrowRight"
      >
        <span>explore the product range</span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default SideBar;
