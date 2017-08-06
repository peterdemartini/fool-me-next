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
}

const Pillar = ({ size, position }) => {
  return <Rectangle color={0x000000} size={size} position={position} />
}

Pillar.propTypes = propTypes

export default Pillar
