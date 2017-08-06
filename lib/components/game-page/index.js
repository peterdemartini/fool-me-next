import React from "react"
import PropTypes from "prop-types"
import { Game } from "react-pixi-game"
import MainStage from "../main-stage"

const propTypes = {
  player: PropTypes.object.isRequired,
  startPlayerAction: PropTypes.func.isRequired,
}

class GamePage extends React.Component {
  componentDidMount() {
    this.props.startPlayerAction()
  }

  render() {
    const { player } = this.props
    return (
      <Game>
        <MainStage player={player} />
      </Game>
    )
  }
}

GamePage.propTypes = propTypes

export default GamePage
