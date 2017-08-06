import React from "react"
import PropTypes from "prop-types"
import { Game } from "react-pixi-game"
import MainStage from "../main-stage"

const propTypes = {
  player: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  resize: PropTypes.func.isRequired,
  startPlayerAction: PropTypes.func.isRequired,
}

class GamePage extends React.Component {
  render() {
    const { player, resize, view, startPlayerAction } = this.props
    return (
      <Game>
        <MainStage view={view} player={player} resize={resize} startPlayerAction={startPlayerAction} />
      </Game>
    )
  }
}

GamePage.propTypes = propTypes

export default GamePage
