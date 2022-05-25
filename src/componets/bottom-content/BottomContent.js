import React from "react";
import { getBackgroundImg } from "../side-bar/SideBar";
import { SIDE_ITEMS } from "../side-bar/sideItems";
import style from "./BottomContent.module.css";

const BottomContent = () => {
  return (
    <div className={style.content}>
      {SIDE_ITEMS.map((item) => (
        <div
          key={item.id}
          className={style.btnMenuItem}
          style={{
            background: `url(${getBackgroundImg(item.id)})`,
          }}
        >
          <div style={{ margin: "0px 8px" }}>{item.icon} </div>
          <div
            style={{
              margin: "0px 12px",
              minWidth: "208px",
            }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomContent;
