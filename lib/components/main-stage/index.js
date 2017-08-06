import React from "react"
import PropTypes from "prop-types"
import get from "lodash/fp/get"
import { Stage } from "react-pixi-game"
import Player from "../player"
import styles from "./styles.css"

const propTypes = {
  player: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  resize: PropTypes.func.isRequired,
  startPlayerAction: PropTypes.func.isRequired,
}

const contextTypes = {
  app: PropTypes.object.isRequired,
}

class MainStage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    props.resize(this.state)
    props.startPlayerAction(this.state)
  }

  componentWillReceiveProps(props, context) {
    const { renderer } = context.app
    renderer.backgroundColor = 0xffffff
    this.props.resize(props.view, get(context, "app.view.style"))
  }

  render() {
    const { width, height } = this.state
    const { size, position, color } = this.props.player
    return (
      <Stage width={width} height={height} className={styles.root}>
        <Player size={size} position={position} color={color} />
      </Stage>
    )
  }
}

MainStage.propTypes = propTypes
MainStage.contextTypes = contextTypes

export default MainStage
