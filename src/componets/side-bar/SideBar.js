import React from "react";
import ArrowRight from "../icons/ArrowRight";
import style from "./SideBar.module.css";
import { SIDE_ITEMS } from "./sideItems";

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ismouseOver, setIsMouseOver] = React.useState(false);
  return (
    <div
      className={`${style.sidebar} ${isOpen ? style.fullNav : null} ${
        ismouseOver ? style.sidebarXtra : null
      }`}
    >
      <div className={style.menu}>
        <div className={style.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          <span className="barTop"></span>
          <span className="barBottom"></span>
        </div>
      </div>
      {SIDE_ITEMS.map((item) => (
        <div
          key={item.id}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
          className={style.menuItem}
        >
          {item.title}
        </div>
      ))}

      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        className={style.arrowRight}
      >
        <span>explore the product range</span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default SideBar;
