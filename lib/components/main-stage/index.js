import React from "react"
import PropTypes from "prop-types"
import get from "lodash/fp/get"
import { Stage } from "react-pixi-game"
import Player from "../player"
import Pillars from "../pillars"
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
    const initialView = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    props.resize(props.view, initialView)
    props.startPlayerAction(initialView)
  }

  componentDidUpdate(props, state, context) {
    const { renderer } = context.app
    renderer.backgroundColor = 0xffffff
    this.props.resize(props.view, get(context, "app.view.style"))
  }

  render() {
    const { view, player } = this.props
    const { size, position, color } = player
    return (
      <Stage width={view.width} height={view.height} fullScreen={true} className={styles.root}>
        <Player size={size} position={position} color={color} />
        <Pillars count={5} view={view} />
      </Stage>
    )
  }
}

MainStage.propTypes = propTypes
MainStage.contextTypes = contextTypes

export default MainStage
