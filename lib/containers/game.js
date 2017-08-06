import { connect } from "react-redux"

import { startPlayerAction } from "../reducks/player"
import { resize } from "../reducks/view"

import GamePage from "../components/game-page"

const mapStateToProps = ({ player, view }) => {
  return {
    player,
    view,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startPlayerAction: ({ width, height }) => dispatch(startPlayerAction({ width, height })),
    resize: (current, next) => dispatch(resize(current, next)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
