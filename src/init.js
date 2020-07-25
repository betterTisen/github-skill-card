const ConfList = require("../config")

const Icon = require("../icon")

const renderError = require("./error")

module.exports = function (type) {
  try {
    const { RectWidth, fontX, fontY, fontColor, fontSize, defaultText } = ConfList[type]
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
        ${Icon[type]}
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
  } catch (error) {
    console.log(error)
    return renderError()
  }
}
