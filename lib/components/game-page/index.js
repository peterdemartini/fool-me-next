import React from "react"
import PropTypes from "prop-types"
import { Game } from "react-pixi-game"
import MainStage from "../main-stage"

const propTypes = {
  game: PropTypes.shape({
    time: PropTypes.number,
  }),
  startGameTick: PropTypes.func.isRequired,
}

class GamePage extends React.Component {
  componentDidMount() {
    this.props.startGameTick()
  }

  render() {
    const { time } = this.props.game
    return (
      <Game time={time}>
        <MainStage />
      </Game>
    )
  }
}

GamePage.propTypes = propTypes

export default GamePage
