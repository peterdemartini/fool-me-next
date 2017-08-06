import { createAction, createReducer } from "redux-act"
const keyboardHandler = require("keyboard-handler")

const resetPlayerPosition = createAction("player/reset")
const moveUp = createAction("player/move/up")
const moveDown = createAction("player/move/down")
const moveRight = createAction("player/move/right")
const moveLeft = createAction("player/move/left")

let started = false

const EVENTS = {
  w: moveUp,
  s: moveDown,
  a: moveLeft,
  d: moveRight,
}

export const startPlayerAction = ({ width, height }) => {
  return dispatch => {
    if (started) return
    started = true
    dispatch(resetPlayerPosition({ width, height }))
    keyboardHandler.keyPressed(event => {
      if (!event || !event.key) return
      const keyAction = EVENTS[event.key]
      if (!keyAction) return
      dispatch(keyAction())
    })
  }
}

const initialState = () => ({
  size: {
    x: 50,
    y: 50,
  },
  position: {
    x: 50,
    y: 50,
  },
  color: 0x000000,
})

export default createReducer(
  {
    [moveLeft]: state => ({
      ...state,
      position: {
        ...state.position,
        x: state.position.x - 3,
      },
    }),
    [moveRight]: state => ({
      ...state,
      position: {
        ...state.position,
        x: state.position.x + 3,
      },
    }),
    [moveUp]: state => ({
      ...state,
      position: {
        ...state.position,
        y: state.position.y - 3,
      },
    }),
    [moveDown]: state => ({
      ...state,
      position: {
        ...state.position,
        y: state.position.y + 3,
      },
    }),
    [resetPlayerPosition]: (state, { width, height }) => ({
      ...state,
      position: {
        x: width / 2,
        y: height / 2,
      },
    }),
  },
  initialState()
)
