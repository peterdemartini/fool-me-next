import React from "react"
import times from "lodash/fp/times"
import PropTypes from "prop-types"
import Pillar from "../pillar"

const propTypes = {
  count: PropTypes.number.isRequired,
  view: PropTypes.object.isRequired,
}

const Pillars = ({ count, view }) => {
  const size = {
    x: 50,
    y: 150,
  }

  const getPosition = n => ({
    x: 100 * (n + 1),
    y: view.height - size.y,
  })

  const createPillar = n => <Pillar key={n} size={size} position={getPosition(n)} />

  return (
    <div>
      {times(createPillar, count)}
    </div>
  )
}

Pillars.propTypes = propTypes

export default Pillars
