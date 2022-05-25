import React from "react";

const FlatPlate = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="66"
      viewBox="0 0 66 66"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "70px", height: "70px" }}
    >
      <defs>
        <clipPath id="animationMask_ibR9YnWvig">
          <rect width="66" height="66" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#animationMask_ibR9YnWvig)">
        <g
          transform="matrix(1,0,0,1,4.806000000000001,7.295999999999999)"
          opacity="1"
          style={{ userSelect: "none" }}
        >
          <g opacity="1" transform="matrix(1,0,0,1,28.45,46.617)">
            <path
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill-opacity="0"
              stroke-miterlimit="10"
              stroke="rgb(94,94,94)"
              stroke-opacity="1"
              stroke-width="1"
              style={{
                strokeWidth: "1.5px",
                stroke: stroke,
                transition: "all 0.2s ease-in-out",
              }}
              d=" M-22.1,-1.925 C-22.1,-1.925 -25.95,1.925 -25.95,1.925 C-25.95,1.925 25.95,1.925 25.95,1.925"
            ></path>
          </g>
          <g opacity="1" transform="matrix(1,0,0,1,28.45,42.855)">
            <path
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill-opacity="0"
              stroke-miterlimit="10"
              stroke="rgb(94,94,94)"
              stroke-opacity="1"
              stroke-width="1"
              style={{
                strokeWidth: "1.5px",
                stroke: stroke,
                transition: "all 0.4s ease-in-out",
              }}
              d=" M-22.1,-1.925 C-22.1,-1.925 -25.95,1.925 -25.95,1.925 C-25.95,1.925 25.95,1.925 25.95,1.925"
            ></path>
          </g>
          <g opacity="1" transform="matrix(1,0,0,1,28.45,38.976)">
            <path
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill-opacity="0"
              stroke-miterlimit="10"
              stroke="rgb(94,94,94)"
              stroke-opacity="1"
              stroke-width="1"
              style={{
                strokeWidth: "1.5px",
                stroke: stroke,
                transition: "all 0.6s ease-in-out",
              }}
              d=" M-22.1,-1.925 C-22.1,-1.925 -25.95,1.925 -25.95,1.925 C-25.95,1.925 25.95,1.925 25.95,1.925"
            ></path>
          </g>
          <g opacity="1" transform="matrix(1,0,0,1,28.45,19.775)">
            <path
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill-opacity="0"
              stroke-miterlimit="10"
              stroke="rgb(94,94,94)"
              stroke-opacity="1"
              stroke-width="1"
              style={{
                strokeWidth: "1.5px",
                stroke: stroke,
                transition: "all 0.8s ease-in-out",
              }}
              d=" M8.603,-17.276 C8.603,-17.276 -25.95,17.276 -25.95,17.276 C-25.95,17.276 25.95,17.276 25.95,17.276"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

FlatPlate.defaultProps = {
  stroke: "rgba(255, 255, 255, 1)",
};

export default FlatPlate;
