const errorConf = {
  RectWidth: 95,
  fontX: 37,
  fontY: 21,
  fontColor: "#d81e06",
  fontSize: 13,
  defaultText: "No Type",
}

const errorIcon = `
  <svg
    t="1595663922264"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2087"
    width="23"
    height="23"
    x="5"
    y="4"
  >
    <style>
      @keyframes round {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .ani-cls {
        transform-origin: center 50%;
        transform: rotate(0deg);
        animation: round 8s infinite linear;
      }
    </style>
    <g class="ani-cls">
      <path
        d="M1007.983211 512c0-273.924743-222.059492-495.984235-495.983211-495.984235S16.016789 238.075257 16.016789 512s222.059492 495.984235 495.984235 495.984235c113.738437 0 221.667565-38.428218 308.796972-107.830891 10.45205-8.325619 12.175297-23.547299 3.849678-33.998325-8.325619-10.45205-23.547299-12.175297-33.998325-3.849678-78.636988 62.638619-175.962617 97.290837-278.648324 97.290837-247.200078 0-447.595154-200.395076-447.595154-447.595154S264.799922 64.404846 512 64.404846s447.595154 200.395076 447.595154 447.595154c0 84.755336-23.572882 165.977195-67.401086 236.329497-7.065929 11.341303-3.598968 26.263154 7.742335 33.329083 11.341303 7.065929 26.263154 3.598968 33.329083-7.742335C981.841831 695.941336 1007.983211 605.866854 1007.983211 512zM524.260232 537.694195 371.999432 692.738387c-9.362228 9.534144-24.681122 9.67229-34.214243 0.310062-9.533121-9.362228-9.67229-24.681122-0.310062-34.214243l152.875806-155.669432L337.475128 347.495342c-9.362228-9.534144-9.224082-24.852014 0.310062-34.214243 9.534144-9.362228 24.852014-9.224082 34.214243 0.310062l152.260799 155.044192 152.261822-155.044192c9.362228-9.534144 24.681122-9.67229 34.214243-0.310062 9.533121 9.362228 9.67229 24.681122 0.310062 34.214243L558.170552 503.164774l152.875806 155.669432c9.362228 9.533121 9.224082 24.852014-0.310062 34.214243-9.534144 9.362228-24.852014 9.224082-34.214243-0.310062L524.260232 537.694195z"
        p-id="2088"
        fill="#d81e06"
      ></path>
    </g>
  </svg>
`

module.exports = function () {
  const { RectWidth, fontX, fontY, fontColor, fontSize, defaultText } = errorConf
  return `
    <svg width="${RectWidth + 2}" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect
        rx="5"
        ry="5"
        x="1"
        y="1"
        width="${RectWidth}"
        height="30"
        style="stroke: #e3e3e3; fill: none;"
      />
      ${errorIcon}
      <style>
        .right-txt {
          font-family: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
          font-size: ${fontSize}px;
        }
      </style>
      <text fill="${fontColor}" class="right-txt" x="${fontX}" y="${fontY}">
        ${defaultText}
      </text>
    </svg>  
  `
}
