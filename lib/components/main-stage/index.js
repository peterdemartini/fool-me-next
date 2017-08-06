import React from "react"
import PropTypes from "prop-types"
import { Stage } from "react-pixi-game"
import Player from "../player"
import styles from "./styles.css"

const propTypes = {
  player: PropTypes.object.isRequired,
}

const contextTypes = {
  app: PropTypes.object.isRequired,
}

class MainStage extends React.Component {
  componentWillReceiveProps(props, context) {
    const { app } = context
    app.renderer.backgroundColor = 0xffffff
  }

  render() {
    const { size, position, color } = this.props.player
    return (
      <Stage fullScreen={true} className={styles.root}>
        <Player size={size} position={position} color={color} />
      </Stage>
    )
  }
}

MainStage.propTypes = propTypes
MainStage.contextTypes = contextTypes

export default MainStage
