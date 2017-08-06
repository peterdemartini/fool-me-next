import React from "react"
import PropTypes from "prop-types"
import { Rectangle } from "react-pixi-game"

const propTypes = {
  size: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  color: PropTypes.any.isRequired,
}

const Player = ({ size, position, color }) => {
  return <Rectangle color={color} size={size} position={position} />
}

Player.propTypes = propTypes

export default Player
