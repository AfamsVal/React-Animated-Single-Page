import React, { useEffect } from "react";
import ArrowRight from "../icons/ArrowRight";
import "./SideBar.css";
import { SIDE_ITEMS } from "./sideItems";
import rods from "../../assets/images/sidebar/rods.jpg";
import bar from "../../assets/images/sidebar/bar.jpg";
import tube from "../../assets/images/sidebar/tube.jpg";
import foldPlate from "../../assets/images/sidebar/fold-plate.jpg";
import flatPalt from "../../assets/images/sidebar/flat-plate.jpg";
import zink from "../../assets/images/sidebar/zink.jpg";

export const getBackgroundImg = (itemNo) => {
  switch (itemNo) {
    case 1:
      return tube;
    case 2:
      return foldPlate;
    case 3:
      return flatPalt;
    case 4:
      return bar;
    case 5:
      return rods;
    case 6:
      return zink;
    default:
      return itemNo;
  }
};

const SideBar = () => {
  const [ismouseOver, setIsMouseOver] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [itemNo, setItemNo] = React.useState(0);

  useEffect(() => {
    let timer;
    if (ismouseOver) {
      timer = setTimeout(() => {
        ismouseOver && setDone(true);
        console.log("done", ismouseOver, done);
      }, 700);
    } else {
      clearTimeout(timer);
      console.log("cancel", ismouseOver, done);
      setDone(false);
    }
  }, [ismouseOver, done]);

  const handleMouseOver = (number) => {
    setIsMouseOver(true);
    setItemNo(number);
  };
  const handleMouseOut = () => {
    setIsMouseOver(false);
    setItemNo(0);
  };

  return (
    <div
      className={`sidebar ${ismouseOver ? "sidebarXtra" : ""}`}
      style={{
        background:
          itemNo === 0
            ? "linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.8))"
            : `url(${getBackgroundImg(itemNo)})`,
      }}
    >
      <div className="menu">
        {/* <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
        </div> */}
      </div>
      <div
        style={{
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: ismouseOver ? "rgba(0,0,0,0.6)" : "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
        }}
      >
        {SIDE_ITEMS.map((item) => (
          <div
            key={item.id}
            onMouseOver={() => handleMouseOver(item.id)}
            onMouseOut={() => handleMouseOut()}
            className="menuItem"
          >
            <div style={{ margin: "0px 6px" }}>{item.icon} </div>
            {ismouseOver && (
              <div
                style={{
                  margin: "0px 6px",
                  minWidth: "208px",
                  maxWidth: "210px",
                }}
              >
                {item.title}
              </div>
            )}
          </div>
        ))}

        <div
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={() => handleMouseOut()}
          className="arrowRight"
        >
          <span
            style={{
              marginRight: "80px",
              display: "inline-block",
              minWidth: ismouseOver ? "200px" : "0px",
              color: itemNo > 0 ? "#FFFFFF" : "#e31019",
            }}
          >
            {done ? "EXPLORE THE PRODUCT RANGE" : ""}
          </span>
          <span
            class="arrow"
            style={{
              color: "yellow",
              position: "absolute",
              right: "70px",
            }}
          >
            <ArrowRight
              fill={ismouseOver && itemNo === 0 ? "#e31019" : "#ffffff"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
