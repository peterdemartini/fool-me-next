import { connect } from "react-redux"

import { startGameTick } from "../reducks/game"

import GamePage from "../components/game-page"

const mapStateToProps = ({ player }) => {
  return {
    player,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGameTick: () => dispatch(startGameTick()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
