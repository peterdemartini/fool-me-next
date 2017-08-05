import React from "react"
import { Rectangle } from "react-pixi-game"

class Player extends React.Component {
  render() {
    const size = { x: 20, y: 20 }
    const position = { x: 100, y: 100 }
    return <Rectangle color={0x000000} size={size} position={position} />
  }
}

export default Player
