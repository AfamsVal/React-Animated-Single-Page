import React, { useEffect } from "react";
import ArrowRight from "../icons/ArrowRight";
import "./SideBar.css";
import { SIDE_ITEMS } from "./sideItems";

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ismouseOver, setIsMouseOver] = React.useState(false);
  const [done, setDone] = React.useState(false);

  useEffect(() => {
    let timer;
    if (ismouseOver) {
      timer = setTimeout(() => {
        ismouseOver && setDone(true);
        console.log("done", ismouseOver, done);
      }, 1000);
    } else {
      clearTimeout(timer);
      console.log("cancel", ismouseOver, done);
      setDone(false);
    }
  }, [ismouseOver, done]);
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
          style={{ backgroundColor: item.id === 1 ? "aqua" : "" }}
        >
          <div style={{ margin: "0px 6px" }}>{item.icon} </div>
          {ismouseOver && (
            <div
              style={{
                margin: "0px 6px",
                width: "210px",
              }}
            >
              {item.title}
            </div>
          )}
        </div>
      ))}

      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        className="arrowRight"
      >
        <span style={{ width: ismouseOver ? "200px" : "0px" }}>
          {done ? "explore the product range" : ""}
        </span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default SideBar;
