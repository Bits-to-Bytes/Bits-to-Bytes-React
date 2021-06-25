import React from "react"

const LottiPlayer = ({ animation, style }) => {
  return (
    <lottie-player
      src={animation}
      background="transparent"
      speed="1"
      style={{ width: "100%", height: "100%", ...style }}
      loop
      autoplay
      mode="bounce"
      className="image"
    ></lottie-player>
  )
}

export default LottiPlayer
