import React from "react"
import PropTypes from "prop-types"
import { Stage } from "react-pixi"

const propTypes = {
  startGameTick: PropTypes.func.isRequired,
}

class GamePage extends React.Component {
  componentDidMount() {
    this.props.startGameTick()
  }

  render() {
    return (
      <Stage backgroundColor={"#ffffff"}>
        <h1>Hello</h1>
      </Stage>
    )
  }
}

GamePage.propTypes = propTypes

export default GamePage
