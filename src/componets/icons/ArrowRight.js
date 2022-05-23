import React from "react";
import style from "./ArrowRight.module.css";

const ArrowRight = () => {
  return (
    <span class={style.arrow} style={{ color: "yellow" }}>
      <svg
        viewBox="0 0 153 52.3"
        style={{
          width: "34px",
          height: "12px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <g>
          <path d="M153,26.15a1.49,1.49,0,0,0-.54-1.15h0l-30-25-1.92,2.3,26.82,22.35H1.5a1.5,1.5,0,1,0,0,3H147.36L120.54,50l1.92,2.3,30-25h0A1.49,1.49,0,0,0,153,26.15Z"></path>
        </g>
      </svg>
    </span>
  );
};

export default ArrowRight;
