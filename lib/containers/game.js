import { connect } from "react-redux"

import { startPlayerAction } from "../reducks/player"

import GamePage from "../components/game-page"

const mapStateToProps = ({ player }) => {
  return {
    player,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startPlayerAction: () => dispatch(startPlayerAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
